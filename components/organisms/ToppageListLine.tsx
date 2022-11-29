import React from 'react'
import { Tbody, Tr, Td } from '@chakra-ui/react'
import PriorityButtonBox from '../atoms/selectbox/PriorityButtonBox'

type Props = {
  task: string,
  status:any,
  create: any,
  update: any,
}

const ToppageListLine = ({task, status, create, update}:Props) => {
  return (
    <>
      <Tbody>
        <Tr>
          <Td fontSize="16px" fontWeight="700" p={"16px 12px"}>{task}</Td>
          <Td fontSize="16px" fontWeight="700" p={"16px 10px"}>{status}</Td>
          <Td fontSize="16px" fontWeight="700" p={"16px 10px"}><PriorityButtonBox /></Td>
          <Td fontSize="16px" fontWeight="700" p={"16px 10px"}>{create}</Td>
          <Td fontSize="16px" fontWeight="700" p={"16px 10px"}>{update}</Td>
          <Td fontSize="16px" fontWeight="700" p={"16px 10px"}>ﾎﾞﾀﾝ1 ﾎﾞﾀﾝ2</Td>
        </Tr>
      </Tbody>
    </>
  )
}

export default ToppageListLine