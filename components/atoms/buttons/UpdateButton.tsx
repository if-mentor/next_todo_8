import { Button } from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoTitleState } from "../../../state/todoTitleState";
import { todoDetailState } from "../../../state/todoDetailState";
import { useRouter } from "next/router";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { todoId } from "../../../state/todoId";
export const UpdateButton = () => {
  const router = useRouter();
  const editTarget = useRecoilValue(todoId);
  const [todoDetail, setTodoDetail] = useRecoilState(todoDetailState);
  const [todoTitle, setTodoTitle] = useRecoilState(todoTitleState);

  const editTodo = async () => {
    const docRef = doc(db, "todos", editTarget);
    //フォームに入力があれば更新する
    if (todoTitle !== "") {
      await updateDoc(docRef, {
        title: todoTitle,
        updateAt: serverTimestamp(),
      });
    }
    if (todoDetail !== "") {
      await updateDoc(docRef, {
        detail: todoDetail,
        updateAt: serverTimestamp(),
      });
    }
    //編集後topページに戻る
    await router.push("/todoTop");
  };

  return (
    <Button
      _hover={{ bg: "#40D2F1" }}
      backgroundColor={"#40D2F1"}
      rounded="full"
      border="1px"
      color={"#F0FCFF"}
      borderColor={"blackAlpha.800"}
      w={"112px"}
      fontSize={"18px"}
      fontWeight={"bold"}
      onClick={editTodo}
    >
      UPDATE
    </Button>
  );
};
