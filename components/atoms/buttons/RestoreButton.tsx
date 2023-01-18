import { Button } from "@chakra-ui/react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";

type Props = {
  id: string,
}

export const RestoreButton = ({id}:Props) => {

  const handleRestoreTodo = () => {
    const docEdit = doc(db, "todos", id);
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
