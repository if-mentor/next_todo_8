import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box bg={'#95E3F4'} w={'1280px'} h={'80px'} pos={'absolute'} display={'flex'}>
      <Text fontWeight={'bold'} fontSize={48} pl={99}>
        TODO
      </Text>
    </Box>
  );
};