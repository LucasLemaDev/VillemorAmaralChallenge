import * as React from 'react';
import { 
   Badge, 
   Button, 
   Card, 
   Container, 
   Grid, 
   Group, 
   ScrollArea, 
   Stack, 
   Table, 
   Title} from '@mantine/core';
import { Hearing, ProcessGroup } from '../../interfaces';

interface IGroupsCardProps {
   data: Hearing[],
   groups: ProcessGroup[] | undefined
}


const GroupsCard: React.FunctionComponent<IGroupsCardProps> = ({ data, groups}) => {
   
   const [selectedGroup, setSelectedGroup] = React.useState<ProcessGroup>()
   

   return (
      <Card>
         <Grid>
            <Grid.Col span='auto'>
               <Stack>
                  <Title order={3}>Groups</Title>
               {
                  groups?.map((group, index) => (
                  <Button 
                     key={index} 
                     color={group.color}
                     onClick={(e) => setSelectedGroup(groups?.find(group => group.name == e.currentTarget.innerText.toLowerCase()))}>
                     {group.name.toUpperCase()}
                  </Button>
                  ))
               }
               </Stack>
            </Grid.Col>

            <Grid.Col span={9}>
            {
               selectedGroup ? (
               <Container style={{color:`${selectedGroup.color}`}}>
                  <Badge color={selectedGroup.color} size="xl" mb={10}>
                     {selectedGroup.name.toUpperCase()}
                  </Badge>
                  
                  <ScrollArea h={500}>
                     
                     <Table stickyHeader>
                     <Table.Thead>
                        <Table.Tr>
                           <Table.Th>Process Number</Table.Th>
                           <Table.Th>Date</Table.Th>
                           <Table.Th>Hour</Table.Th>
                           <Table.Th>Court</Table.Th>
                           <Table.Th>Correspondent</Table.Th>
                        </Table.Tr>
                     </Table.Thead>

                     <Table.Tbody>
                        {
                           data.map((item) => {
                           if(selectedGroup.processList?.includes(item.processNumber))
                              return (
                                 <Table.Tr key={item.processNumber}>
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
                           )
                           })
                        }
                     </Table.Tbody>
                     </Table>
                  </ScrollArea>
               </Container>
               
               ) : (
               <Stack align='center'>
                  <Title>Choose a Group</Title>
               </Stack>
               )
            }
            </Grid.Col>
      </Grid>
   </Card>
  );
};

export default GroupsCard;
