import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BottomBar from './components/BottomBar/BottomBar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BottomBar />
  </StrictMode>,
)
