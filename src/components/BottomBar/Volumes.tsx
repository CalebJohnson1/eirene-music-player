import VolumeIcon from '../../assets/Icons/VolumeIcon'
import VolumeLowIcon from '../../assets/Icons/VolumeIcon'
import VolumeHighIcon from '../../assets/Icons/VolumeHighIcon'
import MutedIcon from '../../assets/Icons/MutedIcon'

export default function Volumes() {
    return (
        volumeHigh()
    )
}

function volumeNormal() {
    return (
        <button>
            <VolumeIcon />
        </button>
    )
}

function VolumeLow() {
    return (
        <button>
            <VolumeLowIcon />
        </button>
    )
}

function volumeHigh() {
    return (
        <button>
            <VolumeHighIcon />
        </button>
    )
}

function Muted() {
    return (
        <button>
            <MutedIcon />;
        </button>
    )
}