import { Button } from "@chakra-ui/react";

export const DoingButton = () => {
  return (
    <Button
      _hover={{ bg: "#95E3F4" }}
      backgroundColor={"#95E3F4"}
      rounded="full"
      border="1px"
      color={"#023945"}
      w={"104px"}
      fontSize={"16px"}
      fontWeight={'bold'}
    >
      DOING
    </Button>
  );
};
