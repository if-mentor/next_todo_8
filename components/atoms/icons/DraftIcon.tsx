import { Box, Icon } from '@chakra-ui/react'
import React from 'react'
import { HiPencilSquare } from 'react-icons/hi2'

const DraftIcon = () => {
  return (
    <Box
      display='flex'
      alignItems='center'
      padding='10px'

      w='40px'
      h='40px'
      border='1px solid #B5B5B5'
      borderRadius='50%'
      backgroundColor='#FED7E2BA'
    >
      <Icon 
        as={HiPencilSquare}
        w='18.13px' 
        h='15px'
        top='12.5px'
        left='10.93px'
      />
    </Box>
  )
}

export default DraftIcon