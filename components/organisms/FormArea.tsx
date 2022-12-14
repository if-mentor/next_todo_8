import { Box, Center, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { GoogleLoginButton } from "../atoms/buttons/GoogleLoginButton";
import { LoginButton } from "../atoms/buttons/LoginButton";
import { SignUpButton } from "../atoms/buttons/SignUpButton";
import RoundedCornersTextBox from "../atoms/forms/RoundedCornersTextBox";

export const FormArea = () => {
  const router = useRouter();
  return (
    <Center>
      <Box w={"750px"} bg={"#C8F5FF"} mt={"68px"} borderRadius={"40px"} px={"75px"} pt={"44px"}>
        <Box mb={"40px"}>
          <Center w={"195px"} bg={"#F0FCFF"} borderRadius="40px" mb={"26px"}>
            <Text color={"#28ADCA"} fontSize={"24px"} fontWeight={"bold"}>
              EMAIL
            </Text>
          </Center>
          <Center>
            <RoundedCornersTextBox />
          </Center>
        </Box>
        <Box mb={"40px"}>
          <Center w={"195px"} bg={"#F0FCFF"} borderRadius="40px" mb={"26px"}>
            <Text color={"#28ADCA"} fontSize={"24px"} fontWeight={"bold"}>
              PASSWORD
            </Text>
          </Center>
          <Center>
            <RoundedCornersTextBox />
          </Center>
        </Box>
        <Center mb={"40px"}>
          <GoogleLoginButton />
        </Center>
        <Center mb={"10px"}>
          {router.pathname === "/signup" && <SignUpButton />}
          {router.pathname === "/login" && <LoginButton />}
        </Center>
      </Box>
    </Center>
  );
};
