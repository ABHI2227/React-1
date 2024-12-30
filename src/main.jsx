import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MoneyState from './Context/MoneyState.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <MoneyState>
    <App />
  </MoneyState>,
)
