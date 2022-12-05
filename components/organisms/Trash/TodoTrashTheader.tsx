import {
  TableColumnHeaderProps,
  TableHeadProps,
  Thead,
  Tr,
  Th,
} from "@chakra-ui/react";
import { FC } from "react";

const TodoTrashTheader: FC = () => {
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
          <TrashGreenCell w="384px">Task</TrashGreenCell>
          <TrashGreenCell>Status</TrashGreenCell>
          <TrashGreenCell>Priority</TrashGreenCell>
          <TrashGreenCell>Create</TrashGreenCell>
          <TrashGreenCell>Action</TrashGreenCell>
        </Tr>
      </TrashThead>
    </>
  );
};
export default TodoTrashTheader;
