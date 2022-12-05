import { Button } from "@chakra-ui/react";

export const DoneButton = () => {
  return (
    <Button
      _hover={{ bg: "#28ADCA" }}
      backgroundColor={"#28ADCA"}
      rounded="full"
      border="1px"
      color={"blackAlpha.800"}
      w={"104px"}
      fontSize={"18px"}
      fontWeight={"bold"}
    >
      DONE
    </Button>
  );
};
