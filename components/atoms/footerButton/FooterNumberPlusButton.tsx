import { Button } from '@chakra-ui/react'
import React, { FC } from 'react'

type Props = {
  plus: string,
}

const FooterNumberPlusButton = () => {
  return(
    <Button 
    m="16px 6px"
    w="40px" 
    h="40px" 
    backgroundColor="white"
    border="1px solid rgba(0, 0, 0, 0.8)"
    borderRadius="10px"
    fontSize="18px"
    color="#B5B5B5"
  >
    &gt;
  </Button>
  )
}

export default FooterNumberPlusButton