import { Button } from "@chakra-ui/react";

export const CommentButton = () => {
  return (
    <Button
      _hover={{ bg: "#28ADCA" }}
      backgroundColor={"#28ADCA"}
      rounded="full"
      border="1px"
      color={"white"}
      borderColor={'blackAlpha.800'}
      w={"112px"}
      fontSize={"18px"}
      fontWeight={"bold"}
    >
      Comment
    </Button>
  );
};
