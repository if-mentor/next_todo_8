import React, { useEffect, useState } from 'react';
import { 
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
} from '@chakra-ui/react'
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

export const DeleteAllButton = () => {
  const [todos, setTodos] = useState<Array<Todos>>([]);
  
  useEffect(() => {
    //firebaseからデータの取得
    const postData = collection(db, 'todos') as CollectionReference<Todos>;
    //リアルタイムでデータを取得
    onSnapshot(postData, (todo) => {
      setTodos(todo.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);
  
  // 取得したデータのうち、trashがtrueのものを抽出
  const [filterTodos, setFilterTodos] = useState<Array<Todos>>([...todos]);
  useEffect(() => {
    setFilterTodos(todos.filter((todo:any) => {
      return todo.trash === true
    }))
  }, [todos])

  // Delete Allボタンを押したときに、確認のモーダルウィンドウを表示する機能
  const { isOpen, onOpen, onClose } = useDisclosure()

  // firebaseからtrashがtrueのものをすべて削除する関数
  const handleDeleteAllTodo = ()=>{
    filterTodos.map((e) => 
    deleteDoc(doc(db, "todos",e.id))
    )
    onClose()
}

  return (
    <>
      <Button
        _hover={{ bg: "#E28F84" }}
        backgroundColor={"#E28F84"}
        rounded="full"
        border="1px"
        color={"white"}
        w={"112px"}
        fontSize={"18px"}
        fontWeight={'bold'}
        onClick={onOpen}
      >
        Delete All
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>TODOをすべて削除しますか？</Box>
        </ModalBody>

        <ModalFooter>
          <Button 
            backgroundColor={"#E28F84"}
            rounded="full"
            border="1px"
            color={"white"}
            mr={3} 
            onClick={() => handleDeleteAllTodo()}
          >
            Yes
          </Button>
          <Button 
            backgroundColor={"#40D2F1"}
            rounded="full"
            border="1px"
            color={"white"}colorScheme='blue' 
            mr={3} 
            onClick={onClose}
          >
            No
          </Button>
        </ModalFooter>
      </ModalContent>
      </Modal>
    </>


  );
};
