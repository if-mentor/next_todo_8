import { Button } from "@chakra-ui/react";

export const DeleteAllButton = () => {
  return (
    <Button
      _hover={{ bg: "#E28F84" }}
      backgroundColor={"#E28F84"}
      rounded="full"
      border="1px"
      color={"white"}
      px={"8"}
      borderColor={"white"}
      w={"100px"}
    >
      Delete All
    </Button>
  );
};
