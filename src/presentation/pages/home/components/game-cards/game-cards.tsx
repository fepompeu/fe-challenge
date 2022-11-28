import Styles from './game-cards-styles.scss'

import React from 'react'

import { GameModel, PlayerModel } from '@/domain/models'
import { Card } from '@/presentation/pages/home/components'

type Props = {
  game: GameModel
  players: PlayerModel[]
  playerId: number
  openModalPlayer: (id: number) => void
}

const GameDetails: React.FC<Props> = ({ game, players, playerId, openModalPlayer }: Props) => {
  const isPlayerIdWins = game.winnerId === playerId
  const playerStyle = isPlayerIdWins ? Styles.win : Styles.lose

  const getName = (id: number): string => {
    const player = players.find(player => player.id === id)
    return `${player?.firstName} ${player?.lastName}`
  }

  return (
    <Card >
      <p
        className={[Styles.cardName, isPlayerIdWins ? playerStyle : ''].join(' ')}
        onClick={() => openModalPlayer(game.winnerId)}>
        {getName(game.winnerId)}
      </p>
      <p
        className={[Styles.cardScore].join(' ')}>
        {game.winnerScore}
      </p>
      <p
        className={[Styles.cardName, isPlayerIdWins ? '' : playerStyle].join(' ')}
        onClick={() => openModalPlayer(game.looserId)}
      >
        {getName(game.looserId)}
      </p>
      <p className={[Styles.cardScore].join(' ')}>
        {game.looserScore}
      </p>
    </Card>
  )
}

export default GameDetails
