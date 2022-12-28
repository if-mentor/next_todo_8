import {Heading, Button} from "@chakra-ui/react";
import {auth} from "../firebase";
import {signOut} from "@firebase/auth";
import {useUser} from "../lib/auth";

const HomePage = () => {
  const user = useUser();

  const logOut = () => {
    return signOut(auth)
  }

  return (
    <>
      <Heading>Welcome to Next.js!</Heading>
      <Button colorScheme='blue'>I just consumed some ⚡️Chakra!</Button>
      <br/>
      {user && <Button onClick={logOut}>ログアウト</Button>}
    </>
  )
}

export default HomePage;
