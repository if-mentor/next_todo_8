import { useRouter } from "next/router";
import { useRecoilState } from 'recoil'
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { uuidv4 } from '@firebase/util'
import { Button } from "@chakra-ui/react";

import { auth, db } from "../../../firebase";
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
    // authがnullの可能性があります という文言を消すための関数だが、今の段階で入れると式がreturnしてしまう
    // if(auth.currentUser === null){
    //   return
    // } 
    e.preventDefault();
    // コレクションは"users"でその中にサブコレクションとして"todos"を作る
    const docRef = doc(db, "users", auth.currentUser.uid, "todos", docId);
    const data = {
      text:todoTitle,
      detail:todoDetail,
      userId:auth.currentUser.uid,
      id:docId,
      status:"NOT STARTED",
      priority:priorityValue,
      createdAt: serverTimestamp(),
      updateAt: serverTimestamp(),
    };
    await setDoc(docRef ,data);
    // 送信したらTopページに戻る（Topページがまだマージされていないので仮に"/"に遷移）
    await router.push("/");
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
