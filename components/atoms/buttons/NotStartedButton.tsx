import { Button } from "@chakra-ui/react";

export const NotStartedButto = () => {
  return (
    <Button
      _hover={{ bg: "#F0FCFF" }}
      backgroundColor={"#F0FCFF"}
      rounded="full"
      border="1px"
      px={"8"}
      borderColor={"black"}
      w={'100px'}
      fontSize={'12px'}
    >
      NOT STARTED
    </Button>
  );
};
