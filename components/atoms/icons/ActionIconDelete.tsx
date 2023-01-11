import { Icon } from '@chakra-ui/react'
import { collection, doc, Firestore, onSnapshot, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import {  BsTrash } from 'react-icons/bs'
import { useRecoilState } from 'recoil'
import { db } from '../../../firebase'
import { todoTrashState } from '../../../state/todoTrashState'

const ActionIconDelete = () => {
  // const [trashState, setTrashState] = useRecoilState(todoTrashState);
  const handleTrashTodo = () => {
    // idの取得方法が判明したら変更
    const docEdit = doc(db, "todos", "8a776cd8-9565-4cc0-8f92-f0d6a18a0eac");
    updateDoc(docEdit, {
      trash: true
    })
    // setTrashState(true);
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