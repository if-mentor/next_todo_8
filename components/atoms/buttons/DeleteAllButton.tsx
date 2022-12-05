import { Button } from "@chakra-ui/react";

export const DeleteAllButton = () => {
  return (
    <Button
      _hover={{ bg: "#E28F84" }}
      backgroundColor={"#E28F84"}
      rounded="full"
      border="1px"
      color={"white"}
      w={"112px"}
      fontSize={"18px"}
      fontWeight={'bold'}
    >
      Delete All
    </Button>
  );
};
