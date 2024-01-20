"use client";
import { Checkbox, Container, Table } from '@mantine/core';
import React from 'react';

interface ITableDataProps {
}

type DataResponse = {
   processNumber: string,
   date: string,
   court: string,
   correspondent: string
}

const TableData: React.FunctionComponent<ITableDataProps> = (props) => {

   const [data, setData] = React.useState<DataResponse[] | null>() 

   React.useEffect(() => {
      fetch('./hearings.json')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
        })
    }, [])

  return(
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
                  data ? data.map( (item , index) => (
                    <Table.Tr key={index}>
                        <Table.Td>{item.processNumber}</Table.Td>
                        <Table.Td>{item.date.slice(0, -11)}</Table.Td>
                        <Table.Td>{item.date.slice(10)}</Table.Td>
                        <Table.Td>{item.court}</Table.Td>
                        <Table.Td>{item.correspondent}</Table.Td>
                    </Table.Tr>
                )) : (null
                )
              }
            </Table.Tbody>
          </Table>
      </Table.ScrollContainer>
    </Container>
  ) ;
};

export default TableData;
