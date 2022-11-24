import { Button } from "@chakra-ui/react";

export const RestoreAllButton = () => {
  return (
    <Button
      _hover={{ bg: "#40D2F1" }}
      backgroundColor={"#40D2F1"}
      rounded="full"
      border="1px"
      color={"white"}
      w={"112px"}
      fontSize={"18px"}
      fontWeight={'bold'}
    >
      Restore All
    </Button>
  );
};
