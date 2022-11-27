import {FC} from 'react'
import { Select } from '@chakra-ui/react'

type Props = {
  value1:string,
  value2:string,
  value3:string,
}

const TextAreaBox = ({value1,value2,value3}:Props) => {
  return(
    <Select 
      placeholder='- - - - - - -'
      height="40px"
      width="192px"
      borderColor="black"
      fontSize="16px"
    >
      <option value={value1}>{value1}</option>
      <option value={value2}>{value2}</option>
      <option value={value3}>{value3}</option>
    </Select>
  )
}

export default TextAreaBox;