import {FC} from 'react'
import { Select } from '@chakra-ui/react'

type Props = {
  priority: string
}


const PriorityButtonBox: React.FC<Props>= ({priority}) => {
  return (
    <>
      <Select
        height="40px"
        width="112px"
        borderColor="#30494F"
        fontSize="16px"
      >
        <option value='High' selected={priority === 'High'}>High</option>
        <option value='Middle' selected={priority === 'Middle'}>Middle</option>
        <option value='Low' selected={priority === 'Low'}>Low</option>
      </Select>
    </>
  )
}

export default PriorityButtonBox;
