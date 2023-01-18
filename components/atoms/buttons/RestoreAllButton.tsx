import React, { useEffect, useState } from 'react';


import { Button } from "@chakra-ui/react";
import { collection, CollectionReference, doc, onSnapshot, Timestamp, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

type Todos = {
  id: string;
  createdAt: Timestamp;
  detail: string;
  priority: string;
  status: string;
  text: string;
  updateAt: Timestamp;
  trash: boolean;
};

export const RestoreAllButton = () => {
  const [todos, setTodos] = useState<Array<Todos>>([]);

  useEffect(() => {
    //データの取得
    const postData = collection(db, 'todos') as CollectionReference<Todos>;
    //リアルタイムでデータを取得する。
    onSnapshot(postData, (todo) => {
      setTodos(todo.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  const [filterTodos, setFilterTodos] = useState<Array<Todos>>([...todos]);
  useEffect(() => {
    setFilterTodos(todos.filter((todo:any) => {
      return todo.trash === true
    }))
  }, [todos])

  // todoTrashにあるTODOを、すべてtodoTopに戻す関数
  const handleRestoreAllTodo = ()=>{
    filterTodos.map((e) => 
    updateDoc((doc(db, "todos", e.id)), {
      trash: false
    })
  )}

  return (
    <Button
      _hover={{ bg: "#40D2F1" }}
      backgroundColor={"#40D2F1"}
      rounded="full"
      border="1px"
      color={"white"}
      w={"112px"}
      fontSize={"18px"}
      fontWeight={'bold'}
      onClick={handleRestoreAllTodo}
    >
      Restore All
    </Button>
  );
};
