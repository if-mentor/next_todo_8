import { Button } from "@chakra-ui/react";

export const DraftButton = () => {
  return (
    <Button
      _hover={{ bg: "pink.100" }}
      backgroundColor={"pink.100"}
      rounded="full"
      border="1px"
      px={"8"}
      borderColor={"black"}
      w={"100px"}
    >
      DRAFT
    </Button>
  );
};
