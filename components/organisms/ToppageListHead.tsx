import React from 'react'
import { Thead, Tr, Th } from '@chakra-ui/react'

const ToppageListHead = () => {
  return (
    <>
      <Thead backgroundColor={"#95E3F4"}>
        <Tr>
          <Th textTransform="none" fontSize="24px" fontWeight="700" maxW={"380px"} minW={"380px"} p={"16px 10px"}>Task</Th>
          <Th textTransform="none" fontSize="24px" fontWeight="700" maxW={"140px"} minW={"140px"} p={"16px 10px"}>Status</Th>
          <Th textTransform="none" fontSize="24px" fontWeight="700" maxW={"140px"} minW={"140px"} p={"16px 10px"}>Priority</Th>
          <Th textTransform="none" fontSize="24px" fontWeight="700" maxW={"140px"} minW={"140px"} p={"16px 10px"}>Create</Th>
          <Th textTransform="none" fontSize="24px" fontWeight="700" maxW={"140px"} minW={"140px"} p={"16px 10px"}>Update</Th>
          <Th textTransform="none" fontSize="24px" fontWeight="700" maxW={"115px"} minW={"115px"} p={"16px 10px"}>Action</Th>
        </Tr>
      </Thead>
    </>
  )
}

export default ToppageListHead