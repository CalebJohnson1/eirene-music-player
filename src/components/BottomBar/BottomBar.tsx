import AlbumCover from './AlbumCover.tsx'
import TrackTitle from './TrackTitle'
import TrackArtist from './TrackArtist'
import PreviousIcon from '../../assets/Icons/PreviousIcon'
import PlayIcon from '../../assets/Icons/PlayIcon'
import NextIcon from '../../assets/Icons/NextIcon'
import ShuffleIcon from '../../assets/Icons/ShuffleIcon'

export default function BottomBar() {
  return (
    <div id="bottomBar" className="fixed bottom-0 w-screen h-30 bg-[#001526] border-[#ffffff] border">
      <div id="albumCover" className="fixed bottom-0 w-30 h-30 border-[#ffffff] border">
        <AlbumCover />
      </div>

      <div className='fixed bottom-0 left-31'>
        <b><TrackTitle track='Bardaginn' /><br /></b>
        <TrackArtist artist='Kalandra' /><br />
      </div>

      <div className='flex items-center justify-center gap-1'>
        <PreviousIcon />
        <PlayIcon />
        <NextIcon />
        <ShuffleIcon />
      </div>
    </div>
  )
}