import { Heading, Box, Center, Text } from "@chakra-ui/react";
import { TopButton } from "../components/atoms/buttons/TopButton";

const Custom404 = () => {
  return (
    <>
      <Box px={10} py={5} bg="#95E3F4">
        <Heading ml={10}>TODO</Heading>
      </Box>
      <Center mt={"50px"}>
        <Text fontSize="64px" fontWeight={"bold"}>
          404
        </Text>
      </Center>
      <Center mb={"40px"}>
        <Text fontSize="24px" fontWeight={"bold"} mt={"40px"}>
          This is not the web page you are looking for.
        </Text>
      </Center>
      <Center>
        <TopButton />
      </Center>
    </>
  );
};

export default Custom404;