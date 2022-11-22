import { Button } from "@chakra-ui/react";

export const DoneButton = () => {
  return (
    <Button
      _hover={{ bg: "green.200" }}
      backgroundColor={"green.200"}
      rounded="full"
      border="1px"
      px={"6"}
      borderColor={"black"}
    >
      DONE
    </Button>
  );
};
