import { useState } from "react";

export const useTrackMetadata = () => {
    const [track, setTrack] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
}