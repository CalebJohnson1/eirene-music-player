import AlbumCover from "../BottomBar/AlbumCover";
import TrackArtist from "../BottomBar/TrackArtist";
import TrackTitle from "../BottomBar/TrackTitle";
import TrackAlbum from "./TrackAlbum";

export default function LargeCover() {
    return (
        <>
            <div id='coverContainer' className="relative top-20 left-200 w-140 h-140">
                <div id='largeCoverBlurred' className="absolute w-140 h-140 blur-3xl">
                    <AlbumCover />
                </div>

                <div id='largeCover' className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-[3rem] overflow-hidden">
                    <AlbumCover />
                </div>

                <div id='bigText' className="relative flex flex-col items-center top-110 gap-1 text-3xl">
                    <p><b><TrackTitle track="Bardaginn"/></b></p>
                    <p><TrackArtist artist="Kalandra"/></p>
                    <TrackAlbum album="A Frame of Mind" />
                </div>
            </div>
        </>
    )
}