export default function Fret(
    props: {
        onClick?: () => void,
        isActive?: boolean
    }
) {


    return (
        <button
            onClick={
                props.onClick
            }

            className={"w-12 h-6 bg-white relative border-black border-r-4 group"}>

            <div className={`absolute w-full h-[1px] top-[50%] translate-y-[-50%] bg-black group-hover:bg-red-400 `}>
                {
                    props.isActive && <div
                        className={"absolute w-[10px] h-[10px] top-[50%] translate-y-[-55%] left-[50%] translate-x-[-50%] bg-red-400 z-100 text-red-500 rounded-full"}>

                    </div>
                }
            </div>

        </button>
    )


}