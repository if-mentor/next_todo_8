import { Button } from "@chakra-ui/react";
import Link from "next/link";

export const BackButton = () => {
  return (
    <Link href={"/todoTop"}>
      <Button
        _hover={{ bg: "#95E3F4" }}
        backgroundColor={"#95E3F4"}
        rounded="full"
        border="1px"
        color={"blackAlpha.800"}
        w={"104px"}
        fontSize={"18px"}
        fontWeight={"bold"}
      >
        Back
      </Button>
    </Link>
  );
};
