import React, { FC } from "react";
import { TableColumnHeaderProps, TableBodyProps, Tbody, Td, Tr, Center } from "@chakra-ui/react";
import PriorityButtonBox from "../../atoms/selectbox/PriorityButtonBox";
import { RestoreButton } from "../../atoms/buttons/RestoreButton";
import { DeleteButton } from "../../atoms/buttons/DeleteButton";

type Props = {
  task: string;
  status: React.ReactNode;
  create: any;
};

export const TodoTrashRow: FC<Props> = (props) => {
  const { task, status, create } = props;

  const TrashTbody = (props: TableBodyProps) => {
    return (
      <Tbody h="56px" pb="-1" borderColor="rgba(0, 0, 0, 0.25)" {...props} />
    );
  };

  const TrashWhiteCell = (props: TableColumnHeaderProps) => {
    return (
      <Td
        maxW="174px"
        minW="174px"
        fontFamily="Roboto"
        fontSize="16px"
        color="BlackAlpha.800"
        p="12px 10px"
        {...props}
      />
    );
  };

  return (
    <TrashTbody>
      <Tr>
        <TrashWhiteCell maxW="384px" minW="384px">
          <Center>
            {task}
          </Center>
        </TrashWhiteCell>
        <TrashWhiteCell>
          <Center>
            {status}
          </Center>
        </TrashWhiteCell>
        <TrashWhiteCell>
          <Center>
            <PriorityButtonBox />
          </Center>
        </TrashWhiteCell>
        <TrashWhiteCell>
          <Center>
            {create}
          </Center>
        </TrashWhiteCell>
        <TrashWhiteCell>
          <Center>
            <DeleteButton />
            <RestoreButton />
          </Center>
        </TrashWhiteCell>
      </Tr>
    </TrashTbody>
  );
};
