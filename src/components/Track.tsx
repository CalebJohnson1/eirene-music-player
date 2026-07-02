export default function Track() {
    return (
        <>
            <TrackTitle track="Unknown Track"/><br/>
            <TrackArtist artist="Unknown Artist"/><br/>
        </>
    )
}

function TrackTitle({track}: {track: string}) {
    return track;
}

function TrackArtist({artist}: {artist: string}) {
    return artist;
}