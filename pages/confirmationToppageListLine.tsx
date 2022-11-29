import React from 'react'
import { DoingButton } from '../components/atoms/buttons/DoingButton'
import { DoneButton } from '../components/atoms/buttons/DoneButton'
import { NotStartedButto } from '../components/atoms/buttons/NotStartedButton'
import ToppageListHead from '../components/organisms/ToppageListHead'
import ToppageListLine from '../components/organisms/ToppageListLine'

import { TableContainer, Table } from '@chakra-ui/react'

const confirmationToppageListLine: React.FC = () => {
  return (
    <>
      <TableContainer w={"1080px"}>
        <Table variant="simple">
          <ToppageListHead />
          <ToppageListLine 
            status={<NotStartedButto />}
            task="Github上に静的サイトをホスティングする"
            create="2022-11-11 12:12"
            update="2022-12-11 12:12"
          />
          <ToppageListLine 
            status={<DoingButton />}
            task="ReactでTodoサイトを作成する"
            create="2022-10-11 12:12"
            update="2022-12-14 12:12"
          />
          <ToppageListLine 
            status={<DoneButton />}
            task="Firestore Hostingを学習する"
            create="2022-11-15 12:12"
            update="2022-12-24 12:00"
          />
        </Table>
      </TableContainer>
    </>
  )
}

export default confirmationToppageListLine