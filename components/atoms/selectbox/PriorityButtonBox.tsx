import {FC} from 'react'
import { Select } from '@chakra-ui/react'


const PriorityButtonBox: React.FC= () => {
  return (
    <>
      <Select
        height="40px"
        width="112px"
        borderColor="#30494F"
        fontSize="16px"
      >
        <option value='High'>High</option>
        <option value='Middle'>Middle</option>
        <option value='Low'>Low</option>
      </Select>
    </>
  )
}

export default PriorityButtonBox;