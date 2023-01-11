import { Box, Icon } from '@chakra-ui/react'
import React from 'react'
import { FaTrashRestoreAlt } from 'react-icons/fa'

const TrashIcon = () => {
  return (
      <Box
      display='flex'
      justifyContent='center'
      alignItems='center'

      w='40px'
      h='40px'
      border='1px solid #B5B5B5'
      borderRadius='50%'
      backgroundColor='#F6E05E'
    >
      <Icon 
        as={FaTrashRestoreAlt}
        w='14px' 
        h='18px'
      />
    </Box>
  )
}

export default TrashIcon