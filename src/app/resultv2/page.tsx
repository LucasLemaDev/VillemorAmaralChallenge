"use client";
import React from 'react';
import useSWR from 'swr';
import { Hearing, ProcessGroup } from '../../../interfaces';
import { 
  Alert, 
  Button, 
  Card, 
  Checkbox, 
  Group, 
  Loader, 
  Modal, 
  ScrollArea, 
  Select, 
  SimpleGrid, 
  Stack, 
  Table, 
  Title} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks'
import { IconInfoCircle, IconPlus, IconSearch } from '@tabler/icons-react';
import GroupsCard from '@/components/GroupsCard';
import { initialGroups } from '../../../data'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Index() {

  const { data, error, isLoading } = useSWR<Hearing[]>("/api/hearings", fetcher);
  const [selection, setSelection] = React.useState<string[]>([]);
  const [selectedModal, setSelectedModal] = React.useState<string>()

  const [groups, setGroups] = React.useState<ProcessGroup[]>(initialGroups);
  const [opened, { open, close }] = useDisclosure(false);

  function handleAddGroup() {
    close()

    setGroups(
      groups.map(group =>{
        if(group.name == selectedModal)
          return { ...group, processList: selection}
        else 
          return group
      })
    )
  }

  if(isLoading) return <Loader color="yellow" />
  
  if (error) return ( 
    <Alert variant="light" color="red" title="Error" icon={<IconInfoCircle/>}>
      {error.message}
    </Alert>
  )

  if (data) {

    const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
    const toggleAll = () =>
    setSelection((current) => (current.length === data?.length ? [] : data.map((item) => item.processNumber)));

    return (
      <SimpleGrid cols={2}>
        <Card>
          <Title order={3} mb={10}>Process List</Title>
          <Stack align='flex-end'>
            <ScrollArea h={500}>
              <Table stickyHeader  highlightOnHover  miw={800} verticalSpacing="sm">
                <Table.Thead >
                  <Table.Tr color='#d8c1a7'>
                    <Table.Th>
                      <Checkbox
                        onChange={toggleAll}
                        checked={selection.length === data.length}
                        indeterminate={selection.length > 0 && selection.length !== data.length}
                      />
                    </Table.Th>
                    <Table.Th>Process Number</Table.Th>
                    <Table.Th>Date</Table.Th>
                    <Table.Th>Hour</Table.Th>
                    <Table.Th>Court</Table.Th>
                    <Table.Th>Correspondent</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                
                <Table.Tbody>
                  {
                    data.map((item , index) => (
                      <Table.Tr key={item.processNumber}>
                          <Table.Td>
                            <Checkbox checked={selection.includes(item.processNumber)} onChange={() => toggleRow(item.processNumber)} />
                          </Table.Td>
                          <Table.Td>{item.processNumber}</Table.Td>
                          <Table.Td>
                            {`${new Date(item.date).toLocaleDateString()}`}
                          </Table.Td>
                          <Table.Td>
                            {`${new Date(item.date).toLocaleTimeString()}`}
                          </Table.Td>
                          <Table.Td>{item.court}</Table.Td>
                          <Table.Td>{item.correspondent}</Table.Td>
                      </Table.Tr>
                    ))
                  }
                </Table.Tbody>
              </Table>
            </ScrollArea>
            
            <Group>
              <Button color='gray' onClick={open}>
                  Add Group
              </Button>
            </Group>
          </Stack>
        </Card>

        <GroupsCard data={data} groups={groups}/>
        
        <Modal 
          opened={opened} 
          onClose={close}
          title="Select Group">
          <Stack>
            <Select 
                placeholder="Pick value"
                data={groups.map(group => group.name.toUpperCase())}
                onChange={(_vale, options) => setSelectedModal(options.value.toLowerCase())}
            ></Select>

            <Button 
                color='blue' 
                rightSection={<IconPlus/>}
                onClick={handleAddGroup}>
                Add
            </Button>
          </Stack>
        </Modal>
      </SimpleGrid>
    ) ;
  }

  
};
