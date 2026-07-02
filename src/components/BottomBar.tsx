import Track from './Track'
import PreviousIcon from '../assets/Icons/PreviousIcon'
import PlayIcon from '../assets/Icons/PlayIcon'
import NextIcon from '../assets/Icons/NextIcon'
import ShuffleIcon from '../assets/Icons/ShuffleIcon'

export default function BottomBar() {
  return (
    <div id="bottomBar" className="fixed bottom-0 w-screen h-30 bg-[#001526] border-[#ffffff] border">
      <Track />
      <PreviousIcon />
      <PlayIcon />
      <NextIcon />
      <ShuffleIcon />
    </div>
  )
}