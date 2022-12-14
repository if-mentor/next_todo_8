import { Flex, Stack } from "@chakra-ui/react";
import TitleForm from "../components/atoms/forms/TitleForm";
import TextBox from "../components/atoms/forms/TextBox";
import TextBox2 from "../components/atoms/forms/TextBox2";
import TextBox3 from "../components/atoms/forms/TextBox3";
import TextSmallBox from "../components/atoms/forms/TextSmallBox";
import RoundedCornersTextBox from "../components/atoms/forms/RoundedCornersTextBox";

const CheckForm = () => {
  return (
    <>
      <Flex justify="center" align="center" direction="column" backgroundColor={"gray.400"}>
        <Stack spacing={9} mt={9} mb={9}>
          <TitleForm />
          <TextBox />
          <TextBox2 />
          <TextBox3 />
          <TextSmallBox />
          <RoundedCornersTextBox />
        </Stack>
      </Flex>
    </>
  );
};

export default CheckForm;
