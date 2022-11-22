import { Button } from "@chakra-ui/react";

export const NotStartedButto = () => {
  return (
    <Button
      _hover={{ bg: "green.50" }}
      backgroundColor={"green.50"}
      rounded="full"
      border="1px"
      px={"6"}
      borderColor={"black"}
    >
      NOT STARTED
    </Button>
  );
};
