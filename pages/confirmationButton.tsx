import { Center } from "@chakra-ui/react";
import BaseButton from "../components/atoms/buttons/BaseButton";

const ConfirmationButton = () => {
  return (
    <>
      <Center mt={"4"}>
        <BaseButton backgroundColor={"green.50"}>NOT STARTED</BaseButton>
        <BaseButton backgroundColor={"green.500"} fontColor={"white"}>DOING</BaseButton>
        <BaseButton backgroundColor={"green.200"}>DONE</BaseButton>
        <BaseButton backgroundColor={"red.300"} fontColor={'white'} borderColor={'white'}>Delete all</BaseButton>
        <BaseButton backgroundColor={"blue.300"} fontColor={'white'} borderColor={'white'}>Restore All</BaseButton>
        <BaseButton backgroundColor={"green.200"}>Back</BaseButton>
        <BaseButton backgroundColor={'blackAlpha.400'}>RESET</BaseButton>
      </Center>
      <Center mt={"9"}>
        <BaseButton backgroundColor={'pink.100'}>DRAFT</BaseButton>
        <BaseButton backgroundColor={"green.500"} fontColor={"white"}>CREATE</BaseButton>
        <BaseButton backgroundColor={"green.500"} fontColor={"white"}>UPDATE</BaseButton>
        <BaseButton backgroundColor={"green.500"} fontColor={"white"}>Comment</BaseButton>
      </Center>
    </>
  );
};

export default ConfirmationButton;
