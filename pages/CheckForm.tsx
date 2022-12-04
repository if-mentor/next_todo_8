import {Flex, Stack} from "@chakra-ui/react";
import TitleForm from "../components/atoms/Forms/TitleForm"
import TextBox from "../components/atoms/Forms/TextBox";
import TextBox2 from "../components/atoms/Forms/TextBox2";
import TextBox3 from "../components/atoms/Forms/TextBox3";
import TextSmallBox from "../components/atoms/Forms/TextSmallBox";

const CheckForm =()=>{

  return(
    <>
    
    <Flex  justify="center" align="center" direction="column" backgroundColor={"gray.400"}>

      <Stack spacing={9} mt={9} mb={9}>
        <TitleForm/>
        <TextBox/>
        <TextBox2/>
        <TextBox3/>
        <TextSmallBox/>
      </Stack>
      </Flex>
    </>
  );
};

export default CheckForm;
