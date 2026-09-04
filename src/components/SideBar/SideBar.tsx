import AlbumCover from "../BottomBar/AlbumCover";
import TrackArtist from "../BottomBar/TrackArtist";
import TrackTitle from "../BottomBar/TrackTitle";

export default function SideBar() {
    return (
        <div id="sideBar" className="w-100 h-15 bg-[#001526] border-white border">
            <div className="fixed left-0 top-0 w-15 h-15 border">
                <AlbumCover />
            </div>
            <p className="flex justify-center items-start pb-2">
                <b><TrackTitle track="Bardaginn" /></b>
            </p>
            <p className="flex justify-center items-end">
                <TrackArtist artist="Kalandra" />
            </p>
        </div>
    );
}