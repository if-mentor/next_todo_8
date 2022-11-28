import { Box, ChakraProvider, Text } from '@chakra-ui/react';
import React from 'react';
import '@fontsource/roboto'
import theme from './theme'
const Header = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box bg={'#95E3F4'} w={'1280px'} h={'80px'} pos={'absolute'} display={'flex'}>
        <Text fontWeight={'bold'} fontSize={48} pl={99}>
          TODO
        </Text>
      </Box>
    </ChakraProvider>
  )
}

export default Header;