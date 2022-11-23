import { Center } from "@chakra-ui/react";
import { BackButton } from "../components/atoms/buttons/BackButton";
import { CommentButton } from "../components/atoms/buttons/CommentButton";
import { CreateButton } from "../components/atoms/buttons/CreateButton";
import { DeleteAllButton } from "../components/atoms/buttons/DeleteAllButton";
import { DoingButton } from "../components/atoms/buttons/DoingButton";
import { DoneButton } from "../components/atoms/buttons/DoneButton";
import { DraftButton } from "../components/atoms/buttons/DraftButton";
import { GoogleLoginButton } from "../components/atoms/buttons/GoogleLoginButton";
import { LoginButton } from "../components/atoms/buttons/LoginButton";
import { NotStartedButto } from "../components/atoms/buttons/NotStartedButton";
import { ResetButton } from "../components/atoms/buttons/ResetButton";
import { RestoreAllButton } from "../components/atoms/buttons/RestoreAllButton";
import { SignUpButton } from "../components/atoms/buttons/SignUpButton";
import { TopButton } from "../components/atoms/buttons/TopButton";
import { UpdateButton } from "../components/atoms/buttons/UpdateButton";
import { DeleteButton } from "../components/atoms/buttons/DeleteButton";
import {RestoreButton } from "../components/atoms/buttons/RestoreButton";

const ConfirmationButton = () => {
  return (
    <>
      <Center mt={"4"}>
        <NotStartedButto />
        <DoingButton />
        <DoneButton />
        <DeleteAllButton />
        <RestoreAllButton />
        <BackButton />
        <ResetButton />
        <DeleteButton />
        <RestoreButton />
      </Center>
      <Center mt={"9"}>
        <DraftButton />
        <CreateButton />
        <UpdateButton />
        <CommentButton />
        <SignUpButton />
        <LoginButton />
        <TopButton />
        <GoogleLoginButton />
      </Center>
    </>
  );
};

export default ConfirmationButton;
