import { Button } from "@chakra-ui/react";

export const CommentButton = () => {
  return (
    <Button
      _hover={{ bg: "#28ADCA" }}
      backgroundColor={"#28ADCA"}
      rounded="full"
      border="1px"
      color={"white"}
      px={"8"}
      borderColor={"black"}
      w={"100px"}
    >
      Comment
    </Button>
  );
};
