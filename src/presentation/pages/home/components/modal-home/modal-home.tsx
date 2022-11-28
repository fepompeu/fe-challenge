import Styles from './modal-home-styles.scss'

import React from 'react'
import Modal from 'react-modal'

import { PlayerModel } from '@/domain/models'

type Props = {
  isOpen: boolean
  closeModal: () => void
  player: PlayerModel
}

const ModalHome: React.FC<Props> = ({ isOpen, closeModal, player }: Props) => {
  Modal.setAppElement('#main')

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className={Styles.modal}
    >
      <h2 className={Styles.header}>Player Info</h2>
      <div className={Styles.body}>
        <span className={Styles.picture}></span>
        <div className={Styles.rows}>
          <div className={Styles.row}>
            <p>Name</p>
            <p>Win/Lose</p>
          </div>
          <div className={`${Styles.row} ${Styles.contentRow}`}>
            <p>{player.firstName} {player.lastName}</p>
            <p>{player.gamesWon.length}/{player.gamesLose.length}</p>
          </div>
        </div>
      </div>
      <div className={Styles.footer}>
        <button onClick={closeModal}>close</button>
      </div>
    </Modal>
  )
}

export default ModalHome
