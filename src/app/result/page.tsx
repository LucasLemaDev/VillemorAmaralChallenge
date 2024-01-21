"use client";
import React from 'react';
import useSWR from 'swr';
import { Hearing } from '../../../interfaces';
import { Alert, Container, Loader, Table } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

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
      <Table.ScrollContainer minWidth={300} mah={500} type="native">
      <Table stickyHeader  highlightOnHover >
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
                data && data.map((item , index) => (
                  <Table.Tr key={index}>
                      <Table.Td>{item.processNumber}</Table.Td>
                      <Table.Td>{item.date.slice(0, -11)}</Table.Td>
                      <Table.Td>{item.date.slice(10)}</Table.Td>
                      <Table.Td>{item.court}</Table.Td>
                      <Table.Td>{item.correspondent}</Table.Td>
                  </Table.Tr>
                ))
              }
            </Table.Tbody>
          </Table>
      </Table.ScrollContainer>
    </Container>
  ) ;
};
