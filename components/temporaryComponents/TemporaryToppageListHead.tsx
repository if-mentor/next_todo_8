import React from 'react'
import { Thead, Tr, Th, Center } from '@chakra-ui/react'

const temporaryToppageListHead = () => {
  return (
    <>
      <Thead backgroundColor={"#95E3F4"}>
        <Tr>
          <Th textTransform="none" fontSize="24px" fontWeight="700" maxW={"380px"} minW={"380px"} p={"16px 10px"}>Task</Th>
          <Th textTransform="none" fontSize="24px" fontWeight="700" maxW={"140px"} minW={"140px"} p={"16px 10px"}><Center>Status</Center></Th>
          <Th textTransform="none" fontSize="24px" fontWeight="700" maxW={"140px"} minW={"140px"} p={"16px 10px"}><Center>Priority</Center></Th>
          <Th textTransform="none" fontSize="24px" fontWeight="700" maxW={"150px"} minW={"150px"} p={"16px 0px"}><Center>Create</Center></Th>
          <Th textTransform="none" fontSize="24px" fontWeight="700" maxW={"150px"} minW={"150px"} p={"16px 0px"}><Center>Update</Center></Th>
          <Th textTransform="none" fontSize="24px" fontWeight="700" maxW={"120px"} minW={"120px"} p={"16px 10px"}><Center>Action</Center></Th>
        </Tr>
      </Thead>
    </>
  )
  }
export default temporaryToppageListHead