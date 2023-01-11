import { Box, FormControl, FormLabel, Input, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { BackButton } from '../components/atoms/buttons/BackButton'
import { UpdateButton } from '../components/atoms/buttons/UpdateButton'
import TextBox from '../components/atoms/Forms/TextBox'
import TitleForm from '../components/atoms/Forms/TitleForm'

const TodoEdit = () => {
  return (
    <Box>
      {/* headerコンポーネントをここに入れる */}
      <Text>ヘッダー</Text>
      <Box display={'flex'} justifyContent={'space-between'} marginLeft={100} marginRight={220}>
        <Text fontSize={28} fontWeight={700}>EDIT TODO</Text>
        <BackButton />
      </Box>
      <FormControl marginLeft={100} marginRight={100}>
        <FormLabel fontSize={24} fontWeight={700} display={'flex'}>TITLE</FormLabel>
        <TitleForm />
        <FormLabel fontSize={24} fontWeight={700}>DETAIL</FormLabel>
        <TextBox />
        <Box marginRight={320} display={'flex'} justifyContent={'flex-end'}>
          <UpdateButton />
        </Box>
      </FormControl>
    </Box>
    )
}

export default TodoEdit