import { Button } from "@chakra-ui/react";

export const DoingButton = () => {
  return (
    <Button
      _hover={{ bg: "#95E3F4" }}
      backgroundColor={"#95E3F4"}
      rounded="full"
      border="1px"
      px={"8"}
      borderColor={"black"}
      w={'100px'}
    >
      DOING
    </Button>
  );
};
