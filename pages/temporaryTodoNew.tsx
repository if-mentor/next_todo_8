import { Box, FormControl, FormLabel, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useRecoilState } from 'recoil'
import { BackButton } from '../components/atoms/buttons/BackButton'
import { CreateButton } from '../components/atoms/buttons/CreateButton'
import { DraftButton } from '../components/atoms/buttons/DraftButton'
import TextBox from '../components/atoms/Forms/TextBox'
import TitleForm from '../components/atoms/Forms/TitleForm'
import { todoPriorityValueState } from '../state/todoPriorityValueState'


const TodoNew = () => {
  // priorityの値をrecoilで管理
  const [priorityValue, setPriorityValue] = useRecoilState(todoPriorityValueState);

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
        <RadioGroup 
          fontSize={24} 
          fontWeight={700} 
          display={'flex'} 
          justifyContent={'flex-start'}
          onChange={setPriorityValue}
          value={priorityValue}
        >
          <Stack direction={'row'}>
            <Radio value='High'>High</Radio>
            <Radio value='Middle'>Middle</Radio>
            <Radio value='Low'>Low</Radio>
          </Stack>
        </RadioGroup>
        <Box marginRight={320} display={'flex'} justifyContent={'flex-end'}>
          <DraftButton />
          <CreateButton/>
        </Box>
      </FormControl>
    </Box>
    )
}

export default TodoNew