import { Button } from "@chakra-ui/react";

export const CreateButton = () => {
  return (
    <Button
      _hover={{ bg: "#40D2F1" }}
      backgroundColor={"#40D2F1"}
      rounded="full"
      border="1px"
      color={"white"}
      borderColor={'blackAlpha.800'}
      w={"112px"}
      fontSize={"18px"}
      fontWeight={"bold"}
    >
      CREATE
    </Button>
  );
};
