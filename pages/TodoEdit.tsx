import React from 'react'
import { Box, FormControl, FormLabel, Link, Text } from '@chakra-ui/react'
import { Header } from '../components/organisms/Header'
import { BackButton } from '../components/atoms/buttons/BackButton'
import { UpdateButton } from '../components/atoms/buttons/UpdateButton'
import TextBox from '../components/atoms/Forms/TextBox'
import TitleForm from '../components/atoms/Forms/TitleForm'
import NextLink from 'next/link'

const TodoEdit = () => {
  return (
    <Box>
      <Header />
      <Box w='1080px' m='36px auto 0' display={'flex'} justifyContent={'space-between'}>
        <Text fontSize={28} fontWeight={700}>
          EDIT TODO
        </Text>
      <NextLink href='/todoTop' passHref>
        <Link><BackButton /></Link>
      </NextLink>
      </Box>
      <FormControl w='1080px' m='0 auto'>
        <FormLabel fontSize={24} fontWeight={700}>
          TITLE
        </FormLabel>
        <TitleForm />
        <FormLabel fontSize={24} fontWeight={700}>
          DETAIL
        </FormLabel>
        <TextBox />
        <Box mt={5} display={'flex'} justifyContent={'flex-end'}>
          <UpdateButton />
        </Box>
      </FormControl>
    </Box>
  );
};

export default TodoEdit