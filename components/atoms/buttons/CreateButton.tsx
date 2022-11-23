import { Button } from "@chakra-ui/react";

export const CreateButton = () => {
  return (
    <Button
      _hover={{ bg: "#40D2F1" }}
      backgroundColor={"#40D2F1"}
      rounded="full"
      border="1px"
      color={'white'}
      px={"8"}
      borderColor={"black"}
      w={"100px"}
    >
      CREATE
    </Button>
  );
};
