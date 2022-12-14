import React from 'react'
import { Box, FormControl, FormLabel, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import { Header } from '../components/organisms/Header'
import { BackButton } from '../components/atoms/buttons/BackButton'
import { CreateButton } from '../components/atoms/buttons/CreateButton'
import { DraftButton } from '../components/atoms/buttons/DraftButton'
import TextBox from '../components/atoms/Forms/TextBox'
import TitleForm from '../components/atoms/Forms/TitleForm'

const TodoNew = () => {
  return (
    <Box>
      <Header />
      <Box w='1080px' m='36px auto 0' display={'flex'} justifyContent={'space-between'}>
        <Text fontSize={28} fontWeight={700}>
          NEW TODO
        </Text>
        <BackButton />
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
        <Text fontSize={24} fontWeight={700}>
          PRIORITY
        </Text>
        <RadioGroup fontSize={24} fontWeight={700} display={'flex'} justifyContent={'flex-start'}>
          <Stack direction={'row'}>
            <Radio>High</Radio>
            <Radio>Middle</Radio>
            <Radio>Low</Radio>
          </Stack>
        </RadioGroup>
        <Box display={'flex'} justifyContent={'flex-end'}>
          <DraftButton />
          <CreateButton />
        </Box>
      </FormControl>
    </Box>
  );
};

export default TodoNew;