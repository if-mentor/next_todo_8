import { Button } from "@chakra-ui/react";

export const SignUpButton = () => {
  return (
    <Button
      _hover={{ bg: "#28ADCA" }}
      backgroundColor={"#28ADCA"}
      rounded="full"
      border="1px"
      color={"white"}
      px={"8"}
      w={"100px"}
    >
      SIGN UP
    </Button>
  );
};
