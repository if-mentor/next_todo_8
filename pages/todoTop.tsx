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
import { DoingButton } from '../components/atoms/buttons/DoingButton';
import TemporaryToppageListHead from '../components/temporaryComponents/TemporaryToppageListHead';
import TemporaryToppageListLine from '../components/temporaryComponents/TemporaryToppageListLine';
import TrashIcon from '../components/atoms/icons/TrashIcon';
import DraftIcon from '../components/atoms/icons/DraftIcon';
import TextAreaBox from '../components/atoms/selectbox/TextAreaBox';
import { ResetButton } from '../components/atoms/buttons/ResetButton';
import SerchInputArea from '../components/atoms/serchInputArea/SerchInputArea';
import FooterNumberButton from '../components/atoms/footerButton/FooterNumberButton';
import FooterNumberPlusButton from '../components/atoms/footerButton/FooterNumberPlusButton';
import FooterNumberMinusButton from '../components/atoms/footerButton/FooterNumberMinusButton';
import { Header } from '../components/organisms/Header';
import { db } from '../firebase';
import {
  collection,
  CollectionReference,
  Timestamp,
  onSnapshot,
} from 'firebase/firestore';
import { format } from 'date-fns';
import ToppageListHead from '../components/organisms/ToppageListHead';
// import ToppageListLine from '../components/organisms/ToppageListLine';

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

const todoTop = () => {
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
      return todo.trash === false
    }))
  }, [todos])
  console.log("todos:",todos)
  console.log("filterTodos:",filterTodos);


  return (
    <>
      <Header />
      <Flex justify="center" align="center">
        <Flex w="1080px" m="16px 0px">
          <Text fontSize="28px" fontWeight="700">
            TODO LIST
          </Text>
          <Spacer />
          <Box pr="16px">
            <TrashIcon />
          </Box>
          <Box pr="16px">
            <DraftIcon />
          </Box>
        </Flex>
      </Flex>
      <Flex justify="center" align="center">
        <Box minW="1080px" w="1080px">
          <HStack pb="33px">
            <Box pr="24px">
              <Text fontSize="18px">SEARCH</Text>
              <SerchInputArea />
            </Box>
            <Box pr="24px">
              <Text fontSize="18px">STATUS</Text>
              <TextAreaBox value1="NOT STARTED" value2="DOING" value3="DONE" />
            </Box>
            <Box pr="24px">
              <Text fontSize="18px">PROPRITY</Text>
              <TextAreaBox value1="High" value2="Middle" value3="Low" />
            </Box>
            <Flex h="67px" alignItems="flex-end">
              <ResetButton />
            </Flex>
          </HStack>
        </Box>
      </Flex>

      <Flex justify="center" align="center">
        <TableContainer w="1080px">
          <Table variant="simple">
            {/* #20-Add-Toppage-List-Lineがマージされたら書き換える */}
            {/* <TemporaryToppageListHead /> */}
            <ToppageListHead />

            {filterTodos.map((todo) => (
              <TemporaryToppageListLine
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
    </>
  );
};

export default todoTop;
