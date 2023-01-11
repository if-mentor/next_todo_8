import { Icon } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsPencil } from "react-icons/bs";

const ActionIconEdit = () => {
  return (
    <Link href="/TodoEdit">
      <Icon as={BsPencil} h="28px" w="12px" cursor="pointer" />
    </Link>
  );
};

export default ActionIconEdit;
