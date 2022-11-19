import {Center} from '@chakra-ui/react'
import NotStarted from "../components/atoms/buttons/notStarted";
import Doing from "../components/atoms/buttons/doing";
import Done from "../components/atoms/buttons/done";
import DeleteAll from "../components/atoms/buttons/deleteAll";
import RestoreAll from "../components/atoms/buttons/restoreAll";
import Back from "../components/atoms/buttons/back";
import Reset from "../components/atoms/buttons/reset";
import Draft from "../components/atoms/buttons/draft";
import Create from "../components/atoms/buttons/create";
import Update from "../components/atoms/buttons/update";
import Comment from "../components/atoms/buttons/comment";

const ConfirmationButton = () => {
  return (
    <>
      <Center mt={'4'}>
        <NotStarted/>
        <Doing/>
        <Done/>
        <DeleteAll/>
        <RestoreAll/>
        <Back/>
        <Reset/>
      </Center>
      <Center mt={'9'}>
        <Draft/>
        <Create/>
        <Update/>
        <Comment/>
      </Center>
    </>
  );
};

export default ConfirmationButton;
