import { Button } from "@chakra-ui/react";

export const UpdateButton = () => {
  return (
    <Button
      _hover={{ bg: "#40D2F1" }}
      backgroundColor={"#40D2F1"}
      rounded="full"
      border="1px"
      color={"#F0FCFF"}
      borderColor={'blackAlpha.800'}
      w={"112px"}
      fontSize={"18px"}
      fontWeight={"bold"}
    >
      UPDATE
    </Button>
  );
};
