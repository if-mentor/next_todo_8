import { Button } from "@chakra-ui/react";

export const ResetButton = () => {
  return (
    <Button
      _hover={{ bg: "blackAlpha.400" }}
      backgroundColor={"blackAlpha.400"}
      rounded="full"
      border="1px"
      px={"8"}
      borderColor={"black"}
      w={'100px'}
    >
      RESET
    </Button>
  );
};
