import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './screens/Home'
import './style/global.css'
import { Router } from './Routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
