import { Box, Text, Flex } from "@chakra-ui/react";
import { Header } from "../components/organisms/Header";
import { BackButton } from "../components/atoms/buttons/BackButton";
import { CommentButton } from "../components/atoms/buttons/CommentButton";
import CommentTable from "../components/atoms/commentTable/CommentTable";
import TitleDetail from "../components/organisms/TitleDetail";

const TodoDetailPage = () => {
  return (
    <>
      <Box bg="#95E3F4">
        <Box m={"0 auto"} bg={"#95E3F4"} p={4}>
          <Header />
        </Box>
      </Box>
      <Box w={"1080px"} m={"0 auto"} px={5}>
        <Flex justifyContent="space-between">
          <Text fontSize={"28px"} fontWeight={"bold"} mt={"16px"}>
            SHOW TODO
          </Text>
          <Flex mt={"24px"}>
            <Box mr={"16px"}>
              <CommentButton />
            </Box>
            <BackButton />
          </Flex>
        </Flex>
        <Flex alignItems={"flex-end"}>
          <TitleDetail />
          <Box ml={"17px"} h={"464px"}>
            <CommentTable name={"ジョン"} day={"2022/01/01"}>
              2日後までに完了お願いします
            </CommentTable>
            <CommentTable name={"リンゴ"} day={"2022/01/01"}>
              内容確認致しました。修正点メールしましたのでご確認ください。
            </CommentTable>
            <CommentTable name={"ポール"} day={"2022/01/01"}>
              2日後までに完了お願いします
            </CommentTable>
            <CommentTable name={"ジョージ"} day={"2022/01/01"}>
              2日後までに完了お願いします
            </CommentTable>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default TodoDetailPage;
