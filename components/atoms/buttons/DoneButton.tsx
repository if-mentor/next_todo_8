import { Button } from "@chakra-ui/react";

export const DoneButton = () => {
  return (
    <Button
      _hover={{ bg: "#28ADCA" }}
      backgroundColor={"#28ADCA"}
      rounded="full"
      border="1px"
      px={"8"}
      borderColor={"black"}
      w={"100px"}
    >
      DONE
    </Button>
  );
};
