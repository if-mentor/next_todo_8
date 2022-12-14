import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

const SerchInputArea = () => {
  return (
    <>
      <InputGroup w="190px">
        <Input type="text" placeholder="Text" borderColor="black"/>
        <InputRightElement>
          <BsSearch />
        </InputRightElement>
      </InputGroup>
    </>
  )
}

export default SerchInputArea