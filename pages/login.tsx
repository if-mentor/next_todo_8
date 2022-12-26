import {Header} from "../components/organisms/Header";
import {Box, Center, Text, FormControl} from "@chakra-ui/react";
import RoundedCornersTextBox from "../components/atoms/Forms/RoundedCornersTextBox";
import {GoogleLoginButton} from "../components/atoms/buttons/GoogleLoginButton";
import {useState} from "react";
import {LoginButton} from "../components/atoms/buttons/LoginButton";
import {auth} from "../firebase";
import {useRouter} from "next/router"
import {signInWithEmailAndPassword} from "@firebase/auth";

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    debugger
    await signInWithEmailAndPassword(auth, email, password).then(() => {
      router.push("/")
    }).catch((err) => {
      alert(err)
    })
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }
  return (
    <>
      <Header/>
      <Center>
        <Box w={"750px"} bg={"#C8F5FF"} mt={"68px"} borderRadius={"40px"} px={"75px"} pt={"44px"}>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Box mb={"40px"}>
                <Center w={"195px"} bg={"#F0FCFF"} borderRadius="40px" mb={"26px"}>

                  <Text color={"#28ADCA"} fontSize={"24px"} fontWeight={"bold"}>
                    EMAIL
                  </Text>
                </Center>
                <Center>
                  <RoundedCornersTextBox
                    inputText={email}
                    changeInputText={handleChangeEmail}/>
                </Center>
              </Box>
              <Box mb={"40px"}>
                <Center w={"195px"} bg={"#F0FCFF"} borderRadius="40px" mb={"26px"}>
                  <Text color={"#28ADCA"} fontSize={"24px"} fontWeight={"bold"}>
                    PASSWORD
                  </Text>
                </Center>
                <Center>
                  <RoundedCornersTextBox
                    inputText={password}
                    changeInputText={handleChangePassword}/>
                </Center>
              </Box>
              <Center mb={"40px"}>
                <GoogleLoginButton/>
              </Center>
              <Center mb={"10px"}>
                <LoginButton/>
              </Center>
            </FormControl>
          </form>
        </Box>
      </Center>
    </>
  );
};

export default Login;
