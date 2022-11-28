import Styles from './games-details-styles.scss'

import React, { Fragment } from 'react'

import { PlayerModel } from '@/domain/models'
import { Card, GameCards } from '@/presentation/pages/home/components'

type Props = {
  playerId: number | undefined
  players: PlayerModel[]
  openModalPlayer: (id: number) => void
}

const GamesDetails: React.FC<Props> = ({ playerId, players, openModalPlayer }) => {
  const player = players.find(play => play.id === playerId)

  return (
    <ul className={Styles.list}>
      <Card>
        <p className={Styles.headerName}>Winner</p>
        <p className={Styles.headerScore}>Score</p>
        <p className={Styles.headerName}>Looser</p>
        <p className={Styles.headerScore}>Score</p>
      </Card>
      {player && playerId !== undefined
        ? [...player.gamesWon, ...player.gamesLose].map((game) =>
          <GameCards
            key={playerId}
            game={game}
            players={players}
            playerId={playerId}
            openModalPlayer={openModalPlayer}
          />)
        : <Fragment/>
      }
    </ul>
  )
}

export default GamesDetails
