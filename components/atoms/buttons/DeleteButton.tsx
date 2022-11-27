import { Button } from "@chakra-ui/react";

export const DeleteButton= () => {
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
    >
      Delete
    </Button>
  );
};
