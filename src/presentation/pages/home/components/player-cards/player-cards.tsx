import Styles from './player-cards-styles.scss'

import React from 'react'

import { PlayerModel } from '@/domain/models'
import { Card } from '@/presentation/pages/home/components'

type Props = {
  player: PlayerModel
  setPlayerId: (id: number) => void
  openModalPlayer: (id: number) => void
}

const PlayerCards: React.FC<Props> = ({ player, setPlayerId, openModalPlayer }: Props) => {
  const onSeeGamesButtonClick = (): void => {
    setPlayerId(player.id)
  }

  const onNameClick = (): void => {
    openModalPlayer(player.id)
  }

  return (
    <Card key={player.id} >
      <p className={[Styles.cardItem, Styles.cardName].join(' ')} onClick={onNameClick}>
        {player.firstName} {player.lastName}
      </p>
      <p className={Styles.cardItem}>
        {player.gamesWon.length}/{player.gamesLose.length}
      </p>
      <p className={Styles.cardItem}>
        <button onClick={onSeeGamesButtonClick}>See Games</button>
      </p>
    </Card>
  )
}

export default PlayerCards
