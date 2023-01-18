import { Button } from "@chakra-ui/react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";

type Props = {
  id: string,
}

export const DeleteButton= ({id}:Props) => {
  // firebaseから削除する関数
  const handleDeleteTodo = (e:any) => {
    deleteDoc(doc(db, "todos",e));
  };
  
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
      onClick={() => handleDeleteTodo(id)}
    >
      Delete
    </Button>
  );
};
