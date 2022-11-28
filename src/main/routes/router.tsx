import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { makeHome } from '@/main/factories/pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={makeHome} />
    </BrowserRouter>
  )
}

export default Router
