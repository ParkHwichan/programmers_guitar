import Fret from "@/components/guitar/fret";

export default function Fretboard(
    props: {
        frets?: number,
        strings?: number,
    }
) {
    const frets = props.frets || 24;
    const strings = props.strings || 6;




    return <div>

        {
            Array.from({length: strings}).map((_, stringIndex) => {
                return <div className={"flex"}>
                    {
                        Array.from({length: frets}).map((_, fretIndex) => {
                            return <Fret/>
                        })
                    }
                </div>
            })
        }
    </div>


}