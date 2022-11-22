import { Button } from "@chakra-ui/react";

export const DeleteAllButton = () => {
  return (
    <Button
      _hover={{ bg: "red.300" }}
      backgroundColor={"red.300"}
      rounded="full"
      border="1px"
      color={"white"}
      px={"6"}
      borderColor={"white"}
    >
      Delete All
    </Button>
  );
};
