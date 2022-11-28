import Styles from './home-styles.scss'

import React, { Fragment, useEffect, useState } from 'react'

import { PlayerModel } from '@/domain/models'
import { LoadGame, LoadPlayer } from '@/domain/usecases'
import { Players, Modal, GamesDetails } from '@/presentation/pages/home/components'

type Props = {
  loadGames: LoadGame
  loadParticipants: LoadPlayer
}

const Home: React.FC<Props> = ({ loadGames, loadParticipants }: Props) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalPlayer, setModalPlayer] = useState<PlayerModel>()
  const [playerId, setPlayerId] = useState<number>()
  const [players, setPlayers] = useState<PlayerModel[]>([])

  const openModal = (playerId: number): void => {
    const newModalPlayer = players.find(player => player.id === playerId)
    setModalPlayer(newModalPlayer)
    setIsOpen(true)
  }

  const closeModal = (): void => {
    setIsOpen(false)
  }

  useEffect(() => {
    (async () => {
      try {
        const participants = await loadParticipants.loadAll()
        const games = await loadGames.loadAll()

        const gamesFull = participants.map(participant => {
          const gamesPlayed = games.find(g => g.winnerId === participant.id)
          return { ...participant, ...gamesPlayed }
        }).filter(Boolean) as PlayerModel[]
        setPlayers(gamesFull)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <div className={Styles.home}>
      <div className={Styles.homeBox}>
        <Players
          players={players}
          setPlayerId={setPlayerId}
          openModalPlayer={openModal}
        />
        <GamesDetails
          key={playerId}
          playerId={playerId}
          players={players}
          openModalPlayer={openModal}
        />
        {modalPlayer ? <Modal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          player={modalPlayer}
        /> : <Fragment/>}
      </div>
    </div>
  )
}

export default Home
