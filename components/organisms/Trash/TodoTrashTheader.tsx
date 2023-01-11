import * as React from "react";
import { TableColumnHeaderProps, TableHeadProps, Thead, Tr, Th, Center } from "@chakra-ui/react";

export const TodoTrashTheader: React.FC = () => {

  return (
    <>
      <Thead backgroundColor={"#95E3F4"}>
        <Tr>
          <Th textTransform="none" fontSize="24px" fontWeight="700" maxW={"380px"} minW={"380px"} p={"16px 10px"}>Task</Th>
          <Th textTransform="none" fontSize="24px" fontWeight="700" maxW={"140px"} minW={"140px"} p={"16px 10px"}><Center>Status</Center></Th>
          <Th textTransform="none" fontSize="24px" fontWeight="700" maxW={"140px"} minW={"140px"} p={"16px 10px"}><Center>Priority</Center></Th>
          <Th textTransform="none" fontSize="24px" fontWeight="700" maxW={"150px"} minW={"150px"} p={"16px 0px"}><Center>Create</Center></Th>
          {/* <Th textTransform="none" fontSize="24px" fontWeight="700" maxW={"150px"} minW={"150px"} p={"16px 0px"}><Center>Update</Center></Th> */}
          <Th textTransform="none" fontSize="24px" fontWeight="700" maxW={"120px"} minW={"120px"} p={"16px 10px"}><Center>Action</Center></Th>
        </Tr>
      </Thead>
    </>
  )


  
  // const TrashThead = (props: TableHeadProps) => {
  //   return (
  //     <Thead
  //       h={"56px"}
  //       pb="-1"
  //       bgColor={"#95E3F4"}
  //       borderColor="rgba(0, 0, 0, 0.25)"
  //       {...props}
  //     />
  //   );
  // };

  // const TrashGreenCell = (props: TableColumnHeaderProps) => {
  //   return (
  //     <Th
  //       w="174px"
  //       textTransform="none"
  //       fontFamily="Roboto"
  //       fontSize="24px"
  //       color="BlackAlpha.800"
  //       p="12px 10px"
  //       {...props}
  //     />
  //   );
  // };

  // return (
  //   <>
  //     <TrashThead>
  //       <Tr>
  //         <TrashGreenCell w="384px">
  //           <Center>Task</Center>
  //         </TrashGreenCell>
  //         <TrashGreenCell>
  //           <Center>Status</Center>
  //         </TrashGreenCell>
  //         <TrashGreenCell>
  //           <Center>Priority</Center>
  //         </TrashGreenCell>
  //         <TrashGreenCell>
  //           <Center>Create</Center>
  //         </TrashGreenCell>
  //         <TrashGreenCell>
  //           <Center>Action</Center>
  //         </TrashGreenCell>
  //       </Tr>
  //     </TrashThead>
  //   </>
  // );
};