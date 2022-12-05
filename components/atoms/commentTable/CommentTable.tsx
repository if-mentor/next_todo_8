import { Box, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";
type Props = {
  name: string;
  day: string;
  children: React.ReactNode;
};

const CommentTable: FC<Props> = ({ name, children, day }) => {
  return (
    <>
      <Box
        w={"472px"}
        border={"1px"}
        borderColor={"blackAlpha.800"}
        h={"104px"}
        borderRadius={"10px"}
        mb={"16px"}
      >
        <Flex
          p={"2px 25px 2px"}
          justifyContent="space-between"
          bg={"#28ADCA"}
          color={"#fff"}
          fontSize={"16px"}
          fontWeight={"bold"}
          borderRadius={"10px 10px 0 0"}
        >
          <text fontSize={"16px"} fontWeight={"bold"}>
            {name}
          </text>
          <text fontSize={"16px"} fontWeight={"bold"}>
            {day}
          </text>
        </Flex>

        <Text p={"5px 16px 10px"} fontSize={"16px"} fontWeight={"bold"}>
          {children}
        </Text>
      </Box>
    </>
  );
};

export default CommentTable;
