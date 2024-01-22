"use client";
import React from 'react';
import useSWR from 'swr';
import { Hearing } from '../../../interfaces';
import { Alert, Button, Card, Container, Group, Loader, ScrollArea, Stack, Table} from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import Link from 'next/link';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Index() {

  const { data, error, isLoading } = useSWR<Hearing[]>("/api/hearings", fetcher);


  if(isLoading) return <Loader color="yellow" />

  if (error) return ( 
    <Alert variant="light" color="red" title="Error" icon={<IconInfoCircle/>}>
      {error.message}
    </Alert>
  )

  return (
     <Container>
      <Card>
         <Stack>
            <ScrollArea h={500}>
            <Table stickyHeader  highlightOnHover >
               <Table.Thead >
                  <Table.Tr style={{color: '#d8c1a7'}}>
                  <Table.Th>Process Number</Table.Th>
                  <Table.Th>Date</Table.Th>
                  <Table.Th>Hour</Table.Th>
                  <Table.Th>Court</Table.Th>
                  <Table.Th>Correspondent</Table.Th>
                  </Table.Tr>
               </Table.Thead>

               <Table.Tbody>
                  {
                  data && data.map((item , index) => (
                     <Table.Tr key={index}>
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

            <Link href='/resultv2'>
               <Button>
                  See version 2.0
               </Button>
            </Link>
      </Stack>
      </Card>
    </Container>
  ) ;
};