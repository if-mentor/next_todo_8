import { Button } from "@chakra-ui/react";

export const RestoreAllButton = () => {
  return (
    <Button
      _hover={{ bg: "blue.300" }}
      backgroundColor={"blue.300"}
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
