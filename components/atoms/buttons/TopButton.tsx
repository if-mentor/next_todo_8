import { Button } from "@chakra-ui/react";

export const TopButton = () => {
  return (
    <Button
      _hover={{ bg: "pink.100" }}
      backgroundColor={"pink.100"}
      rounded="full"
      border="1px"
      px={"6"}
      borderColor={"black"}
    >
      TOP
    </Button>
  );
};
