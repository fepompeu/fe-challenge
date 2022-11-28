import Styles from './card-styles.scss'

import React from 'react'

type Props = {
  children: React.ReactNode
}

const Card: React.FC<Props> = ({ children }) => {
  return (
    <li className={Styles.card}>
      {children}
    </li>
  )
}

export default Card
