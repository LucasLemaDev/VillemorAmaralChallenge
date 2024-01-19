"use client";
import { Checkbox, Table } from '@mantine/core';
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
   
   const [selectedRows, setSelectedRows] = React.useState<number[]>([]);
   const date = new Date();
  return(
   <Table>
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
                  <Table.Td>{item.date}</Table.Td>
                  <Table.Td>{item.date.slice(10)}</Table.Td>
                  <Table.Td>{item.court}</Table.Td>
                  <Table.Td>{item.correspondent}</Table.Td>
               </Table.Tr>
           )) : (null
           )
         }
      </Table.Tbody>
    </Table>
  ) ;
};

export default TableData;
