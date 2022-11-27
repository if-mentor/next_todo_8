import { Button } from "@chakra-ui/react";

export const DraftButton = () => {
  return (
    <Button
      _hover={{ bg: "#E28F84" }}
      backgroundColor={"#E28F84"}
      rounded="full"
      border="1px"
      color={"blackAlpha.800"}
      w={"112px"}
      fontSize={"18px"}
      fontWeight={"bold"}
    >
      DRAFT
    </Button>
  );
};
