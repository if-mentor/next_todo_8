import { Icon } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsPencil } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { todoId } from "../../../state/todoId";
import { id } from "date-fns/locale";

type Props = {
  id: string;
};

const ActionIconEdit = ({ id }: Props) => {
  //編集ターゲット
  const [editTarget, setEditTarget] = useRecoilState(todoId);

  const editHandler = () => {
    //編集ターゲットのuuidを格納
    setEditTarget(id);
  };
  return (
    <Link href="/TodoEdit">
      <Icon
        as={BsPencil}
        h="28px"
        w="12px"
        cursor="pointer"
        onChange={editHandler}
      />
    </Link>
  );
};

export default ActionIconEdit;
