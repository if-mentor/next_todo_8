import {FC} from 'react'
import React from "react"
import PriorityButtonBox from '../components/atoms/selectbox/PriorityButtonBox';
import TextAreaBox from '../components/atoms/selectbox/TextAreaBox';

const confirmationSelextBox: React.FC = () => {
  return (
    <>
      <PriorityButtonBox />
      <TextAreaBox 
        value1="example1"
        value2="example2"
        value3="example3"
      />
    </>
  )
};

export default confirmationSelextBox;
