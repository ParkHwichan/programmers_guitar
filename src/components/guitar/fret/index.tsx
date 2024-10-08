export default function Fret(
    props: {
        onClick?: () => void,
        isActive?: boolean,
        muted?: boolean,
        dot?: "up" | "down",
        borderWidth? : number
    }
) {


    return (
        <button
            onClick={
                props.onClick
            }
            style={{
                borderLeftWidth : props.borderWidth
            }
            }
            className={`w-12 h-6 bg-white relative border-black border-l group `}>
            {
                props.dot && <div
                    className={`absolute w-[8px] h-[8px] left-[50%] translate-x-[-50%]  rounded-full ${props.dot === "up" ? "top-0" : "top-full"} translate-y-[-50%] bg-black/40 `}>

                </div>
            }

            <div className={`absolute w-full h-[1px] top-[50%] translate-y-[-50%] bg-black group-hover:bg-red-400 ${props.muted ? "opacity-20" : ""} `}>
                {
                    props.isActive && <div
                        className={"absolute w-[12px] h-[12px] border-black border top-[50%] translate-y-[-55%] drop-shadow left-[50%] translate-x-[-50%] bg-red-600 z-100  rounded-full"}>

                    </div>
                }
            </div>
        </button>
    )


}