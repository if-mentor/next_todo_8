import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box bg={'#95E3F4'} h={'80px'} display={'flex'}>
      <Text w={'1080px'} m={'0 auto'} fontWeight={'bold'} fontSize={48}>
        TODO
      </Text>
    </Box>
  );
};