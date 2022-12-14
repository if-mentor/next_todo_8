import * as React from "react";
import { TableColumnHeaderProps, TableHeadProps, Thead, Tr, Th, Center } from "@chakra-ui/react";

export const TodoTrashTheader: React.FC = () => {
  const TrashThead = (props: TableHeadProps) => {
    return (
      <Thead
        h={"56px"}
        pb="-1"
        bgColor={"#95E3F4"}
        borderColor="rgba(0, 0, 0, 0.25)"
        {...props}
      />
    );
  };

  const TrashGreenCell = (props: TableColumnHeaderProps) => {
    return (
      <Th
        w="174px"
        textTransform="none"
        fontFamily="Roboto"
        fontSize="24px"
        color="BlackAlpha.800"
        p="12px 10px"
        {...props}
      />
    );
  };

  return (
    <>
      <TrashThead>
        <Tr>
          <TrashGreenCell w="384px">
            <Center>Task</Center>
          </TrashGreenCell>
          <TrashGreenCell>
            <Center>Status</Center>
          </TrashGreenCell>
          <TrashGreenCell>
            <Center>Priority</Center>
          </TrashGreenCell>
          <TrashGreenCell>
            <Center>Create</Center>
          </TrashGreenCell>
          <TrashGreenCell>
            <Center>Action</Center>
          </TrashGreenCell>
        </Tr>
      </TrashThead>
    </>
  );
};