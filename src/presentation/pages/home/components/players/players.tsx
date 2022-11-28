import Styles from './players-styles.scss'

import React, { Fragment } from 'react'

import { Card, PlayerCards } from '@/presentation/pages/home/components'
import { PlayerModel } from '@/domain/models'

type Props = {
  players: PlayerModel[]
  setPlayerId: (id: number) => void
  openModalPlayer: (id: number) => void
}

const Players: React.FC<Props> = ({ players, setPlayerId, openModalPlayer }: Props) => {
  return (
    <ul className={Styles.list}>
      <Card>
        <p className={Styles.header}>Name</p>
        <p className={Styles.header}>Win/Lose</p>
        <p className={Styles.header}>Options</p>
      </Card>
      {players.length
        ? players.map((player: PlayerModel) =>
          <PlayerCards
            key={player.id}
            player={player}
            setPlayerId={setPlayerId}
            openModalPlayer={openModalPlayer}
          />)
        : <Fragment/>
      }
    </ul>
  )
}

export default Players
