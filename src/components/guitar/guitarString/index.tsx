'use client'
import {useCallback, useEffect, useState} from "react";
import {calculateStringNote, GuitarStringState} from "@/model/guitar/string/string";
import Fret from "@/components/guitar/fret";

export default function GuitarString(
    props: {
        frets?: number,
        stringIndex: number,
    }
) {

    const frets = props.frets || 24;

    const [state, setState] = useState<GuitarStringState>({
        stringIndex: props.stringIndex,
        fret: 0,
    });
    const [note, setNote] = useState(calculateStringNote(state));

    useEffect(() => {
        setNote(calculateStringNote(state));
    }, [state]);


    return <div className={"flex flex-row  "}>

        <div className={"w-[40px]"}>
            {
                state.stringIndex
            }
        </div>
        <div className={"w-[40px]"}>
            {
                state.fret
            }
        </div>
        <div className={"w-[40px]"}>
            {
                note.toString()
            }
        </div>
        <div className={"w-[40px]"}>
            {
                note.toKorean()
            }
        </div>
        {
            Array.from({length: frets}).map((_, fretIndex) => {
                return <Fret
                    key={fretIndex}
                    isActive={fretIndex === state.fret - 1}
                    onClick={() => {

                        if (fretIndex === state.fret - 1) {
                            setState({
                                ...state,
                                fret: 0
                            })
                            return;
                        } else if (fretIndex > state.fret - 1) {
                            setState({
                                ...state,
                                fret: fretIndex + 1
                            })
                            return;
                        } else {
                            setState({
                                ...state,
                                fret: fretIndex + 1
                            })
                        }
                    }}
                />
            })
        }
    </div>


}