import * as React from "react";
import { TableProps, Table, TableContainer } from "@chakra-ui/react";
import { TodoTrashTheader } from "./TodoTrashTheader";
import { TodoTrashRow } from "./TodoTrashRow";
import { NotStartedButton } from "../../atoms/buttons/NotStartedButton";
import { DoingButton } from "../../atoms/buttons/DoingButton";
import { DoneButton } from "../../atoms/buttons/DoneButton";

export const TodoTrash: React.FC = () => {
  const TrashTable = (props: TableProps) => {
    return (
      <Table m='0 auto' maxW="1080px" maxH="392px" minW="1080px" minH="392px" {...props} />
    );
  };

  return (
    <>
      <TableContainer>
        <TrashTable>
          <TodoTrashTheader />
          <TodoTrashRow
            task={"邪王炎殺黒龍波"}
            status={<NotStartedButton />}
            create={"2020-11-8 18:55"}
          />
          <TodoTrashRow
            task={"ReactでTodoサイトを作成する"}
            status={<DoingButton />}
            create={"2020-11-8 18:55"}
          />
          <TodoTrashRow
            task={"Firestore Hostingを学習する"}
            status={<DoneButton />}
            create={"2020-11-8 18:55"}
          />
          <TodoTrashRow
            task={"感謝の正拳突き"}
            status={<DoingButton />}
            create={"2020-11-8 18:55"}
          />
          <TodoTrashRow
            task={"二重の極み"}
            status={<DoingButton />}
            create={"2020-11-8 18:55"}
          />
          <TodoTrashRow
            task={"魔封波"}
            status={<DoingButton />}
            create={"2020-11-8 18:55"}
          />
        </TrashTable>
      </TableContainer>
    </>
  );
};