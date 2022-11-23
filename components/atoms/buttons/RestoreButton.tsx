import { Button } from "@chakra-ui/react";

export const RestoreButton = () => {
  return (
    <Button
      _hover={{ bg: "#40D2F1" }}
      backgroundColor={"#40D2F1"}
      rounded="full"
      border="1px"
      color={"white"}
      px={"8"}
      borderColor={"white"}
      w={"100px"}
    >
      Restore
    </Button>
  );
};
