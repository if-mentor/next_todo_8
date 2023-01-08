import {Heading, Button} from "@chakra-ui/react";
import {setData, setFirebaseData} from "../atoms/todofetchData";
import {useRecoilState} from "recoil";


const HomePage = () => {

  return (
    <>
      <Heading>Welcome to Next.js!</Heading>
      <Button colorScheme='blue'>I just consumed some ⚡️Chakra!</Button>
    </>
  )
}

export default HomePage;
