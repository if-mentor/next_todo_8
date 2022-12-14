import { Button } from "@chakra-ui/react";

export const ResetButton = () => {
  return (
    <Button
      _hover={{ bg: "blackAlpha.400" }}
      backgroundColor={"blackAlpha.400"}
      rounded="full"
      border="1px"
      color={"blackAlpha.800"}
      w={"104px"}
      fontSize={"18px"}
      fontWeight={"bold"}
    >
      RESET
    </Button>
  );
};
