import { Button } from "@chakra-ui/react";

export const LoginButton = () => {
  return (
    <Button
      _hover={{ bg: "#28ADCA" }}
      backgroundColor={"#28ADCA"}
      rounded="full"
      border="1px"
      px={"10"}
      borderColor={"none"}
      w={"204px"}
      fontSize={"24px"}
      h={'54px'}
      color={"#F0FCFF"}
      fontWeight={"bold"}
    >
      LOGIN
    </Button>
  );
};
