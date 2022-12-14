import { Box, FormControl, FormLabel, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { BackButton } from '../components/atoms/buttons/BackButton'
import { CreateButton } from '../components/atoms/buttons/CreateButton'
import { DraftButton } from '../components/atoms/buttons/DraftButton'
import TextBox from '../components/atoms/Forms/TextBox'
import TitleForm from '../components/atoms/Forms/TitleForm'

const TodoNew = () => {
  return (
    <Box>
      {/* headerコンポーネントをここに入れる */}
      <Text>ヘッダー</Text>
      <Box display={'flex'} justifyContent={'space-between'} marginLeft={100} marginRight={220}>
        <Text fontSize={28} fontWeight={700}>NEW TODO</Text>
        <BackButton />
      </Box>
      <FormControl marginLeft={100} marginRight={100}>
        <FormLabel fontSize={24} fontWeight={700} display={'flex'}>TITLE</FormLabel>
        <TitleForm />
        <FormLabel fontSize={24} fontWeight={700}>DETAIL</FormLabel>
        <TextBox />
        <Text fontSize={24} fontWeight={700}>PRIORITY</Text>
        <RadioGroup fontSize={24} fontWeight={700} display={'flex'} justifyContent={'flex-start'}>
          <Stack direction={'row'}>
            <Radio>High</Radio>
            <Radio>Middle</Radio>
            <Radio>Low</Radio>
          </Stack>
        </RadioGroup>
        <Box marginRight={320} display={'flex'} justifyContent={'flex-end'}>
          <DraftButton />
          <CreateButton />
        </Box>
      </FormControl>
    </Box>
    )
}

export default TodoNew