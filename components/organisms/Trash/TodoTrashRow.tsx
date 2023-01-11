import React, { FC } from "react";
import { TableColumnHeaderProps, TableBodyProps, Tbody, Td, Tr, Center } from "@chakra-ui/react";
import PriorityButtonBox from "../../atoms/selectbox/PriorityButtonBox";
import { RestoreButton } from "../../atoms/buttons/RestoreButton";
import { DeleteButton } from "../../atoms/buttons/DeleteButton";

type Props = {
  task: string,
  status:any,
  priority: string
  create: any,
  update: any,
  trash: boolean,
  id: string,
}

export const TodoTrashRow: FC<Props> = ({task, status, priority, create, update,trash,id}:Props) => {

  return (
    <>
      <Tbody>
        <Tr>
          <Td fontSize="16px" fontWeight="700" p={"16px 12px"}>{task}</Td>
          <Td fontSize="16px" fontWeight="700" p={"16px 10px"}><Center>{status}</Center></Td>
          <Td fontSize="16px" fontWeight="700" p={"16px 10px"}><Center><PriorityButtonBox priority={priority}/></Center></Td>
          <Td fontSize="14px" fontWeight="700" p={"16px 0px"}><Center>{create}</Center></Td>
          {/* <Td fontSize="14px" fontWeight="700" p={"16px 0px"}><Center>{update}</Center></Td> */}
          <Td fontSize="16px" fontWeight="700" p={"16px 10px"}><Center><DeleteButton />　<RestoreButton /></Center></Td>
        </Tr>
      </Tbody>
    </>
  )


  // const { task, status, create } = props;

  // const TrashTbody = (props: TableBodyProps) => {
  //   return (
  //     <Tbody h="56px" pb="-1" borderColor="rgba(0, 0, 0, 0.25)" {...props} />
  //   );
  // };

  // const TrashWhiteCell = (props: TableColumnHeaderProps) => {
  //   return (
  //     <Td
  //       maxW="174px"
  //       minW="174px"
  //       fontFamily="Roboto"
  //       fontSize="16px"
  //       color="BlackAlpha.800"
  //       p="12px 10px"
  //       {...props}
  //     />
  //   );
  // };

  // return (
  //   <TrashTbody>
  //     <Tr>
  //       <TrashWhiteCell maxW="384px" minW="384px">
  //         <Center>
  //           {task}
  //         </Center>
  //       </TrashWhiteCell>
  //       <TrashWhiteCell>
  //         <Center>
  //           {status}
  //         </Center>
  //       </TrashWhiteCell>
  //       <TrashWhiteCell>
  //         <Center>
  //           <PriorityButtonBox />
  //         </Center>
  //       </TrashWhiteCell>
  //       <TrashWhiteCell>
  //         <Center>
  //           {create}
  //         </Center>
  //       </TrashWhiteCell>
  //       <TrashWhiteCell>
  //         <Center>
  //           <DeleteButton />
  //           <RestoreButton />
  //         </Center>
  //       </TrashWhiteCell>
  //     </Tr>
  //   </TrashTbody>
  // );
};
