import {Heading, Button} from "@chakra-ui/react";
import {auth} from "../firebase";
import {signOut} from "@firebase/auth";
import {useRecoilValue} from "recoil";
import {userState} from "../lib/auth";

const HomePage = () => {
  const authUser = useRecoilValue(userState)
  const logOut = () => {
    return signOut(auth)
  }

  return (
    <>
      <Heading>Welcome to Next.js!</Heading>
      <Button colorScheme='blue'>I just consumed some ⚡️Chakra!</Button>
      <br/>
      {authUser && <Button onClick={logOut}>ログアウト</Button>}
    </>
  )
}

export default HomePage;
