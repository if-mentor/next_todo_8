import React from 'react'
import { Box, TableContainer, Table, Flex, Text, Spacer, HStack} from "@chakra-ui/react";
import { DoingButton } from "../components/atoms/buttons/DoingButton";
import { DoneButton } from "../components/atoms/buttons/DoneButton";
import { NotStartedButton } from "../components/atoms/buttons/NotStartedButton";
import TemporaryToppageListHead from "../components/temporaryComponents/TemporaryToppageListHead";
import TemporaryToppageListLine from "../components/temporaryComponents/TemporaryToppageListLine";
import TrashIcon from '../components/atoms/icons/TrashIcon';
import DraftIcon from '../components/atoms/icons/DraftIcon';
import TextAreaBox from '../components/atoms/selectbox/TextAreaBox';
import { ResetButton } from '../components/atoms/buttons/ResetButton';
import SerchInputArea from '../components/atoms/serchInputArea/SerchInputArea';
import FooterNumberButton from '../components/atoms/footerButton/FooterNumberButton';
import FooterNumberPlusButton from '../components/atoms/footerButton/FooterNumberPlusButton';
import FooterNumberMinusButton from '../components/atoms/footerButton/FooterNumberMinusButton';
import { Header } from '../components/organisms/Header';

const todoTop = () => {
  return (
    <>
      <Header />
      <Flex  justify='center' align='center'>
        <Flex w="1080px" m="16px 0px">
          <Text fontSize="28px" fontWeight="700">TODO LIST</Text>
          <Spacer />
          <Box pr="16px">
            <TrashIcon />
          </Box>
          <Box pr="16px">
            <DraftIcon />
          </Box>
        </Flex>
      </Flex>
      <Flex justify='center' align='center'>
        <Box minW="1080px" w="1080px">
          <HStack pb="33px">
            <Box pr="24px">
              <Text fontSize="18px">SEARCH</Text>
              <SerchInputArea />
            </Box>
            <Box pr="24px">
              <Text fontSize="18px">STATUS</Text>
              <TextAreaBox value1="NOT STARTED" value2="DOING" value3="DONE"/>
            </Box>
            <Box pr="24px">
              <Text fontSize="18px">PROPRITY</Text>
              <TextAreaBox value1="High" value2="Middle" value3="Low"/>
            </Box>
            <Flex h="67px" alignItems="flex-end">
              <ResetButton />
            </Flex>
          </HStack>
        </Box>
      </Flex>

      <Flex  justify='center' align='center'>
        <TableContainer w="1080px">
          <Table variant="simple">

            {/* #20-Add-Toppage-List-Lineがマージされたら書き換える */}
            <TemporaryToppageListHead />
            <TemporaryToppageListLine
              status={<NotStartedButton />}
              task="Github上に静的サイトをホスティングする"
              create="2022-11-11 12:12"
              update="2022-12-11 12:12"
            />
            <TemporaryToppageListLine
              status={<DoingButton />}
              task="ReactでTodoサイトを作成する"
              create="2022-10-11 12:12"
              update="2022-12-14 12:12"
            />
            <TemporaryToppageListLine
              status={<DoneButton />}
              task="Firestore Hostingを学習する"
              create="2022-11-15 12:12"
              update="2022-12-24 12:00"
            />
            <TemporaryToppageListLine
              status={<NotStartedButton />}
              task="こんにちは"
              create="2022-11-11 12:12"
              update="2022-12-11 12:12"
            />
            <TemporaryToppageListLine
              status={<NotStartedButton />}
              task="はろー"
              create="2022-11-11 12:12"
              update="2022-12-11 12:12"
            />
            <TemporaryToppageListLine
              status={<NotStartedButton />}
              task="だーじゃーはお"
              create="2022-11-11 12:12"
              update="2022-12-11 12:12"
            />
            {/* ここまで */}

          </Table>
        </TableContainer>
      </Flex>
      <Flex  justify='center' align='center'>
        <FooterNumberMinusButton />
        <FooterNumberButton footerNum={1} />
        <FooterNumberButton footerNum={2} />
        <FooterNumberButton footerNum="..." />
        <FooterNumberButton footerNum={4} />
        <FooterNumberButton footerNum={5} />
        <FooterNumberPlusButton />
      </Flex>
    </>
  )
}

export default todoTop