import { Button } from "@chakra-ui/react";

export const NotStartedButton = () => {
  return (
    <Button
      _hover={{ bg: "#F0FCFF" }}
      backgroundColor={"#F0FCFF"}
      rounded="full"
      border="1px"
      color={"#023945"}
      w={"104px"}
      fontSize={"12px"}
      fontWeight={'bold'}
    >
      NOT STARTED
    </Button>
  );
};
