import React from 'react'
import ActionIconDelete from './ActionIconDelete'
import ActionIconEdit from './ActionIconEdit'
import DraftIcon from './DraftIcon'
import TrashIcon from './TrashIcon'


const Icons = () => {

  return (
    <>
      <ActionIconEdit />
      <br />
      <ActionIconDelete />
      <br />
      <DraftIcon />
      <br/>
      <TrashIcon />
    </>
  )
}

export default Icons