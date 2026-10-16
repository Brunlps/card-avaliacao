import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CardAval from './components/CardAval'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardAval />
  </StrictMode>,
)
