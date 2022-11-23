import { Button } from "@chakra-ui/react";

export const LoginButton = () => {
  return (
    <Button
      _hover={{ bg: "#28ADCA" }}
      backgroundColor={"#28ADCA"}
      rounded="full"
      border="1px"
      color={"white"}
      px={"10"}
      borderColor={"none"}
      w={"100px"}
    >
      LOGIN
    </Button>
  );
};
