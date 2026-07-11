import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BottomBar from './components/BottomBar/BottomBar.tsx'
import SideBar from './components/SideBars/SideBar.tsx'
import LargeCover from './components/LargeCover/LargeCover.tsx'
import Settings from './components/Settings/Settings.tsx'
import DarkLightModes from './components/Settings/DarkLightModes.tsx'
import FileSelector from './components/Settings/FileSelector.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <BottomBar />
      <SideBar />
      <LargeCover />
      <DarkLightModes />
      <Settings />
      <FileSelector />
    </>
  </StrictMode>,
)
