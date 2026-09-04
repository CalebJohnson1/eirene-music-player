import { useRef, useEffect } from "react"

export const useAudioPlayer = (audioSrc: {AudioSrc: File}) => {
    const track = useRef(audioSrc);

}