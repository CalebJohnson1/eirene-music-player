export default function ProgressBar() {
    return (
        <>
            {getTime()}
            <div className="w-360 h-2 bg-white rounded-full">
                <div>

                </div>
            </div>
        </>
    )
}

function getTime() {
    return (
        <>
            <p className="fixed left-52 bottom-11">0:00</p>
            <p className="fixed right-52 bottom-11">0:00</p>
        </>
    )
}