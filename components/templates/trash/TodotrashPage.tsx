import { Box, Flex, Spacer, HStack, Center } from "@chakra-ui/react";
import { DeleteAllButton } from "../../atoms/buttons/DeleteAllButton";
import { RestoreAllButton } from "../../atoms/buttons/RestoreAllButton";
import { BackButton } from "../../atoms/buttons/BackButton";
import { GreyButton, NumButtonFirst, NumButtonSecond, NumButtonPoint, NumButtonFifth, NumButtonSixth, WhiteButton } from "./NumButton";
import { TodoTrash } from "../../organisms/Trash/TodoTrash";
import { Header } from "../../organisms/Header";

export const TodotrashPage = () => {
  return (
    <>
      <Box>
        <Header />

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

        {/* Pagenation機能 実装後消去予定 */}
        <Center mt="96px" mb="24px">
        <HStack spacing="12px">
          <GreyButton />
          <NumButtonFirst />
          <NumButtonSecond/>
          <NumButtonPoint/>
          <NumButtonFifth/>
          <NumButtonSixth/>
          <WhiteButton/>
        </HStack>
        </Center>
      </Box>
    </>
  );
};