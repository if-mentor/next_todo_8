import { useRouter } from "next/router";
import { useRecoilState } from 'recoil'
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { uuidv4 } from '@firebase/util'
import { Button } from "@chakra-ui/react";

import { db } from "../../../firebase";
import { todoTitleState } from "../../../state/todoTitleState";
import { todoDetailState } from "../../../state/todoDetailState";
import { todoPriorityValueState } from "../../../state/todoPriorityValueState";

export const CreateButton = () => {
  const router = useRouter();
  // TODOの各値をrecoilで管理
  const [todoTitle, setTodoTitle] = useRecoilState(todoTitleState);
  const [todoDetail, setTodoDetail] = useRecoilState(todoDetailState);
  const [priorityValue, setPriorityValue] = useRecoilState(todoPriorityValueState);

  // TODOのdocIdをuuidで作成
  const docId = uuidv4();

  // CREATEボタンを押したときに、firebaseにデータを送信するための関数
  const createTodo =async (e:any) => {
    e.preventDefault();
    // コレクションは"users"でその中にサブコレクションとして"todos"を作る
    const docRef = doc(db, "todos", docId);
    const data = {
      text:todoTitle,
      detail:todoDetail,
      status:"NOT STARTED",
      priority:priorityValue,
      createdAt: serverTimestamp(),
      updateAt: serverTimestamp(),
    };
    await setDoc(docRef ,data);
    // 送信したらTopページに戻る
    await router.push("/todoTop");
  }
  return (
    <Button
      _hover={{ bg: "#40D2F1" }}
      backgroundColor={"#40D2F1"}
      rounded="full"
      border="1px"
      color={"white"}
      borderColor={'blackAlpha.800'}
      w={"112px"}
      fontSize={"18px"}
      fontWeight={"bold"}
      onClick={createTodo}
    >
      CREATE
    </Button>
  );
};
