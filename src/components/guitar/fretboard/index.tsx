import Fret from "@/components/guitar/fret";
import GuitarString from "@/components/guitar/guitarString";

export default function Fretboard(
    props: {
        frets?: number,
        strings?: number,
    }
) {
    const frets = props.frets || 24;
    const strings = props.strings || 6;


    return <div className={"flex flex-col border border-black w-fit bg-white" }>
        {
            Array.from({length: strings}).map((_, stringIndex) => {
                return <GuitarString
                    key={stringIndex}
                    stringIndex={stringIndex+1} frets={frets}/>
            })
        }
    </div>


}