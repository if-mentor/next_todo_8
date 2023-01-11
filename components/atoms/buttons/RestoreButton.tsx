import { Button } from "@chakra-ui/react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";

export const RestoreButton = () => {

  const handleRestoreTodo = () => {
    // idの取得方法が判明したら変更
    const docEdit = doc(db, "todos", "8a776cd8-9565-4cc0-8f92-f0d6a18a0eac");
    
    updateDoc(docEdit, {
      trash: false
    })
  }

  return (
    <Button
      _hover={{ bg: "#40D2F1" }}
      backgroundColor={"#40D2F1"}
      rounded="full"
      border="1px"
      color={"white"}
      w={"80px"}
      fontSize={"18px"}
      fontWeight={'bold'}
      onClick={handleRestoreTodo}
    >
      Restore
    </Button>
  );
};
