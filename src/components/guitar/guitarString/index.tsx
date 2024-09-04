'use client'
import {useCallback, useEffect, useState} from "react";
import {calculateStringNote, GuitarStringState} from "@/model/guitar/string/string";
import Fret from "@/components/guitar/fret";


const dotPosition = [
    [3, 3], [5, 3], [7, 3], [9, 3], [12, 2], [12, 4], [15, 3], [17, 3], [19, 3], [21, 3], [24, 2], [24, 4]
]


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
        muted: false
    });
    const [note, setNote] = useState(calculateStringNote(state));

    useEffect(() => {
        setNote(calculateStringNote(state));
    }, [state]);


    return <div className={"flex flex-row text-sm text-black"}>

        <div className={"flex flex-row bg-black/10"}>
            <div className={"w-[40px] text-center text-sm flex items-center justify-center "}>
                {
                    state.stringIndex
                }
            </div>
            <div className={"w-[40px] flex items-center justify-center"}>
                {
                    note.toString().split("#").map((notePart, index) => {
                        return (
                            <>
                                {notePart}
                                {index < note.toString().split("#").length - 1 && (
                                    <span
                                        className={"mb-auto"}
                                        style={{fontSize: '0.6em', verticalAlign: 'super'}}>#</span>
                                )}
                            </>
                        );
                    })
                }
            </div>
            <div className={"w-[40px] flex items-center justify-center"}>
                {
                    note.toKorean().split("#").map((notePart, index) => {
                        return (
                            <>
                                {notePart}
                                {index < note.toKorean().split("#").length - 1 && (
                                    <span
                                        className={"mb-auto"}
                                        style={{fontSize: '0.6em', verticalAlign: 'super'}}>#</span>
                                )}
                            </>
                        );
                    })
                }
            </div>
            <button
                className={"w-[40px] text-sm mr-1"}
                onClick={() => {
                    setState({
                        ...state,
                        muted: !state.muted
                    })
                }}>
                {
                    state.muted ? "X" : state.fret === 0 ? "O" : state.fret
                }
            </button>
        </div>

        {
            Array.from({length: frets}).map((_, fretIndex) => {
                const showDot = dotPosition.some(([fret, string]) => {
                    return fret === fretIndex + 1 && string === state.stringIndex - 1
                })

                return <Fret
                    dot={showDot ? "up" : undefined}
                    muted={state.muted}
                    key={fretIndex}
                    borderWidth={fretIndex % 12 === 0 ? 4 : undefined}
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