import React, { useEffect, useState } from 'react';

import {
  Box,
  TableContainer,
  Table,
  Flex,
  Text,
  Spacer,
  HStack,
} from '@chakra-ui/react';
import { BackButton } from "../components/atoms/buttons/BackButton";
import { DeleteAllButton } from "../components/atoms/buttons/DeleteAllButton";
import { RestoreAllButton } from "../components/atoms/buttons/RestoreAllButton";
import { Header } from "../components/organisms/Header";
import { GreyButton, NumButtonFirst, NumButtonSecond, NumButtonPoint, NumButtonFifth, NumButtonSixth, WhiteButton } from "../components/templates/trash/NumButton";
import { collection, CollectionReference, onSnapshot, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { TodoTrashTheader } from '../components/organisms/Trash/TodoTrashTheader';
import { TodoTrashRow } from '../components/organisms/Trash/TodoTrashRow';
import { DoingButton } from '../components/atoms/buttons/DoingButton';


import { format } from 'date-fns';
import FooterNumberMinusButton from '../components/atoms/footerButton/FooterNumberMinusButton';
import FooterNumberButton from '../components/atoms/footerButton/FooterNumberButton';
import FooterNumberPlusButton from '../components/atoms/footerButton/FooterNumberPlusButton';

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

const todoTrash = () => {
  const [todos, setTodos] = useState<Array<Todos>>([]);
  
  useEffect(() => {
    //データの取得
    const postData = collection(db, 'todos') as CollectionReference<Todos>;
    
    //リアルタイムでデータを取得する。
    onSnapshot(postData, (todo) => {
      setTodos(todo.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);
  

  const [trashTodos, setTrashTodos] = useState<Array<Todos>>([...todos]);
  useEffect(() => {
    setTrashTodos(todos.filter((todo:any) => {
      return todo.trash === true
    }))
  }, [todos])

  return (
    <>
      <Box>
        <Header />

        <Flex mb="39px">
          <Box
            maxW="92px"
            minW="92px"
            maxH="33px"
            minH="33px"
            mt="16px"
            ml="100px"
            fontSize="24px"
            fontWeight="bold"
          >
            TRASH
          </Box>
          <Spacer />
          <HStack spacing="16px" mr="93px" mt="24px">
            <DeleteAllButton />
            <RestoreAllButton />
            <BackButton />
          </HStack>
        </Flex>
        
        <Flex justify="center" align="center">
        <TableContainer w="1080px">
          <Table variant="simple">
            {/* #20-Add-Toppage-List-Lineがマージされたら書き換える */}
            {/* <TemporaryToppageListHead /> */}
            <TodoTrashTheader />

            {trashTodos.map((todo) => (
              <TodoTrashRow
              // <TemporaryToppageListLine
                key={todo.id}
                status={<DoingButton />} //仮でボタン
                priority={todo.priority}
                task={todo.text}
                trash={todo.trash}
                create={format(todo.createdAt.toDate(), 'yyyy-MM-dd HH:mm')}
                update={format(todo.updateAt.toDate(), 'yyyy-MM-dd HH:mm')}
                id={todo.id}
              />
            ))}
            {/* ここまで */}
          </Table>
        </TableContainer>
      </Flex>
      <Flex justify="center" align="center">
        <FooterNumberMinusButton />
        <FooterNumberButton footerNum={1} />
        <FooterNumberButton footerNum={2} />
        <FooterNumberButton footerNum="..." />
        <FooterNumberButton footerNum={4} />
        <FooterNumberButton footerNum={5} />
        <FooterNumberPlusButton />
      </Flex>
      </Box>
    </>
  );
};
export default todoTrash;
