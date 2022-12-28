import { Button } from "@chakra-ui/react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";

export const DeleteButton= () => {
  // firebaseから削除する
  const handleDeleteTodo = () => {
    console.log("削除ボタンを押しました")
    // deleteDoc(doc(db, "todos", e))
  }
  return (
    <Button
      _hover={{ bg: "#E28F84" }}
      backgroundColor={"#E28F84"}
      rounded="full"
      border="1px"
      color={"white"}
      w={"80px"}
      fontSize={"18px"}
      fontWeight={'bold'}
      onClick={() => handleDeleteTodo()}
    >
      Delete
    </Button>
  );
};
