import { makeLoadGames, makeLoadParticipants } from '@/main/factories/usecases'
import { Home } from '@/presentation/pages'

import React from 'react'

export const makeHome: React.FC = () => {
  return (
    <Home
      loadGames={makeLoadGames()}
      loadParticipants={makeLoadParticipants()}
    />
  )
}
