import React, { useEffect, useState } from 'react';
import { Button } from "@chakra-ui/react";
import { collection, CollectionReference, deleteDoc, doc, Firestore, onSnapshot, Timestamp } from "firebase/firestore";
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

// idの取得方法が判明したら変更↓
const id ="daaxwBhgR5yWyZ9l1bKs"


export const DeleteAllButton = () => {
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

  // idを取得方法が判明したら編集
  // firebaseから削除する関数
  const handleDeleteAllTodo = (e:any)=>{
    filterTodos.map((id) => 
    deleteDoc(doc(db, "todos",id.id))
  )}

  return (
    <Button
      _hover={{ bg: "#E28F84" }}
      backgroundColor={"#E28F84"}
      rounded="full"
      border="1px"
      color={"white"}
      w={"112px"}
      fontSize={"18px"}
      fontWeight={'bold'}
      onClick={() => handleDeleteAllTodo(id)}
    >
      Delete All
    </Button>
  );
};
