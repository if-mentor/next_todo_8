import { Icon } from '@chakra-ui/react'
import { collection, doc, Firestore, onSnapshot, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import {  BsTrash } from 'react-icons/bs'
import { useRecoilState } from 'recoil'
import { db } from '../../../firebase'
import { todoTrashState } from '../../../state/todoTrashState'

type Props = {
  id: string,
}

const ActionIconDelete = ({id}:Props) => {
  const [trashState, setTrashState] = useRecoilState(todoTrashState);
  const handleTrashTodo = () => {
    const docEdit = doc(db, "todos", id);
    updateDoc(docEdit, {
      trash: true
    })
    setTrashState(true);
  }
  
  return (
    <Icon
      as={BsTrash}
      h='28px'
      w='12px'
      cursor="pointer"
      onClick={handleTrashTodo}
    />
  )
}

export default ActionIconDelete