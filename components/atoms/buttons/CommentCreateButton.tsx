import { Button } from "@chakra-ui/react";

export const CommentCreateButton = () => {
  return (
    <Button
      _hover={{bg: "#28ADCA"}}
      backgroundColor={"#28ADCA"}
      borderRadius={'10px'}
      border="1px"
      px={"10"}
      borderColor={'blackAlpha.800'}
      w={"372px"}
      fontSize={"18px"}
      h={"43px"}
      color={"#F0FCFF"}
      fontWeight={'bold'}
    >
      CREATE
    </Button>
  );
};
