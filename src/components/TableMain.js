import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient'

export default function TableMain(){

    const [FundingRoundsDemo, setCompanies] = useState([])
    const [company, setCompany] = useState({ company_name: ""})
    const {id, company_name} = company
    useEffect (() => {
        fetchCompanies()
    }, [])  

  async function fetchCompanies() {
    const { data } = await supabase
    .from('FundingRoundsDemo')
    .select()
    .order('earliest_date', {ascending: false})
    setCompanies(data)
    console.log("data: ", data)
  }
    return (
    <TableContainer>
        <Table variant='simple' >
            <Thead>
            <Tr>
                <Th>Date</Th>
                <Th>Amount</Th>
                <Th>Round</Th>
                <Th>Company</Th>
            </Tr>
            </Thead>
            {FundingRoundsDemo.map(company => (
            <Tbody>
            <Tr>
                <Td >{company.earliest_date}</Td>
                <Td >$ {company.funding_amount}</Td>
                <Td >{company.funding_round}</Td>
                <Td >{company.company_name}</Td>
            </Tr>
            </Tbody>
            ))
            }
        </Table>
    </TableContainer>
    )  
}
