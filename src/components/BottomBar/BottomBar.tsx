import AlbumCover from './AlbumCover.tsx'
import TrackTitle from './TrackTitle'
import TrackArtist from './TrackArtist'
import PreviousIcon from '../../assets/Icons/PreviousIcon'
import PlayIcon from '../../assets/Icons/PlayIcon'
import NextIcon from '../../assets/Icons/NextIcon'
import ShuffleIcon from '../../assets/Icons/ShuffleIcon'
import VolumeBar from './VolumeBar.tsx'
import ProgressBar from './ProgressBar.tsx'
import Volumes from './Volumes.tsx'

export default function BottomBar() {
  return (
    <div id="bottomBar" className="fixed bottom-0 w-screen h-30 bg-[#001526] border-white border">
      <div id="albumCover" className="fixed bottom-0 w-30 h-30 border-white border">
        <AlbumCover />
      </div>

      <div className='fixed bottom-0 left-31'>
        <b><TrackTitle track='Bardaginn' /><br /></b>
        <TrackArtist artist='Kalandra' /><br />
      </div>

      <div className='h-30 w-screen flex justify-center items-end p-3.5 gap-1'>
        <PreviousIcon />
        <PlayIcon />
        <NextIcon />
        <ShuffleIcon />
      </div>

      <div className='fixed right-3 bottom-12.5'>
        <VolumeBar />
      </div>

      <div className='fixed right-60 bottom-12.5'>
        <ProgressBar />
      </div>

      <div className='fixed right-34 bottom-9.5'>
        <Volumes />
      </div>
    </div>
  );
}