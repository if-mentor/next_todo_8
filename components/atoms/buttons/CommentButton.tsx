import { Button } from "@chakra-ui/react";

export const CommentButton = () => {
  return (
    <Button
      _hover={{ bg: "green.500" }}
      backgroundColor={"green.500"}
      rounded="full"
      border="1px"
      color={"white"}
      px={"6"}
      borderColor={"black"}
    >
      Comment
    </Button>
  );
};
