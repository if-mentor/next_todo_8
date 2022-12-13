import { Button } from '@chakra-ui/react'
import React from 'react'

type Props = {
  footerNum:number | string,
}

const FooterNumberButton = ({footerNum}:Props) => {
  return (
    <>
      <Button 
        m="16px 6px"
        w="40px" 
        h="40px" 
        backgroundColor="white"
        border="1px solid rgba(0, 0, 0, 0.8)"
        borderRadius="10px"
        fontSize="18px"
      >
        {footerNum}
      </Button>
    </>
  )
}

export default FooterNumberButton