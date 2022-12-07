import { Box, Flex, Spacer, HStack, Center } from "@chakra-ui/react";
import { DeleteAllButton } from "../../atoms/buttons/DeleteAllButton";
import { RestoreAllButton } from "../../atoms/buttons/RestoreAllButton";
import { BackButton } from "../../atoms/buttons/BackButton";
<<<<<<< HEAD
import TodoTrash from "../../organisms/Trash/TodoTrash";
import { GreyButton, NumButton1, NumButton2, NumButton3, NumButton5, NumButton6, WhiteButton } from "./NumButton";
=======
import TodoTrash from "../../organisms/trash/TodoTrash";
import {
  GreyButton,
  NumButtonFirst,
  NumButtonSecond,
  NumButtonPoint,
  NumButtonFifth,
  NumButtonSixth,
  WhiteButton,
} from "./NumButton";
>>>>>>> e61cecd856f5dcd404e713ccab4a67e56d4080b3

const TodotrashPage = () => {
  return (
    <>
      <Box maxW="1280px" minW="1280px">
        {/* Header コンポーネント*/}
        <Box
          maxW="1280px"
          minW="1280px"
          maxH="80px"
          minH="80px"
          bg="#95E3F4"
          textAlign="left"
        >
          Todo
        </Box>

        <Flex mb="39px">
          <Box
            maxW="92px"
            minW="92px"
            maxH="33px"
            minH="33px"
            mt="16px"
            ml="100px"
            fontSize="24px"
            fontWeight="bold"
          >
            TRASH
          </Box>
          <Spacer />
          <HStack spacing="16px" mr="93px" mt="24px">
            <DeleteAllButton />
            <RestoreAllButton />
            <BackButton />
          </HStack>
        </Flex>
        <TodoTrash />

        <Center mt="96px" mb="24px">
<<<<<<< HEAD
        <HStack spacing="12px">
          <GreyButton />
          <NumButton1 />
          <NumButton2/>
          <NumButton3/>
          <NumButton5/>
          <NumButton6/>
          <WhiteButton/>
        </HStack>
=======
          <HStack spacing="12px">
            <GreyButton />
            <NumButtonFirst />
            <NumButtonSecond />
            <NumButtonPoint />
            <NumButtonFifth />
            < NumButtonSixth/>
            <WhiteButton />
          </HStack>
>>>>>>> e61cecd856f5dcd404e713ccab4a67e56d4080b3
        </Center>
      </Box>
    </>
  );
};
export default TodotrashPage;
