import { Button } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { todoTitleState } from "../../../state/todoTitleState";
import { todoDetailState } from "../../../state/todoDetailState";
import { todoPriorityValueState } from "../../../state/todoPriorityValueState";
import { useRouter } from "next/router";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { todoId } from "../../../state/todoId";

export const UpdateButton = () => {
  const router = useRouter();
  const [editTarget, setEditTarget] = useRecoilState(todoId);

  const editTodo = async() =>  {
    
  }

  return (
    <Button
      _hover={{ bg: "#40D2F1" }}
      backgroundColor={"#40D2F1"}
      rounded="full"
      border="1px"
      color={"#F0FCFF"}
      borderColor={'blackAlpha.800'}
      w={"112px"}
      fontSize={"18px"}
      fontWeight={"bold"}
      onClick={editTodo}
    >
      UPDATE
    </Button>
  );
};