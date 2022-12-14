import React from 'react'
import { Tbody, Tr, Td, Center } from '@chakra-ui/react'
import PriorityButtonBox from '../atoms/selectbox/PriorityButtonBox'
import ActionIconEdit from '../atoms/icons/ActionIconEdit'
import ActionIconDelete from '../atoms/icons/ActionIconDelete'

type Props = {
  task: string,
  status:any,
  create: any,
  update: any,
}

const temporaryToppageListLine = ({task, status, create, update}:Props) => {
  return (
    <>
      <Tbody>
        <Tr>
          <Td fontSize="16px" fontWeight="700" p={"16px 12px"}>{task}</Td>
          <Td fontSize="16px" fontWeight="700" p={"16px 10px"}><Center>{status}</Center></Td>
          <Td fontSize="16px" fontWeight="700" p={"16px 10px"}><Center><PriorityButtonBox /></Center></Td>
          <Td fontSize="14px" fontWeight="700" p={"16px 0px"}><Center>{create}</Center></Td>
          <Td fontSize="14px" fontWeight="700" p={"16px 0px"}><Center>{update}</Center></Td>
          <Td fontSize="16px" fontWeight="700" p={"16px 10px"}><Center><ActionIconEdit />　<ActionIconDelete></ActionIconDelete></Center></Td>
        </Tr>
      </Tbody>
    </>
  )
}
export default temporaryToppageListLine