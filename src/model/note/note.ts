type NoteName = 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#' | 'A' | 'A#' | 'B';
type NoteNameKor = '도' | '도#' | '레' | '레#' | '미' | '파' | '파#' | '솔' | '솔#' | '라' | '라#' | '시';

// 노트 이름과 한국어 노트 이름을 상수로 정의
const NOTE_NAMES: NoteName[] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const KOR_NOTE_NAMES: NoteNameKor[] = ['도', '도#', '레', '레#', '미', '파', '파#', '솔', '솔#', '라', '라#', '시'];

const majorChordTransposition = [0, 4, 7];
const minorChordTransposition = [0, 3, 7];
const seventhChordTransposition = [0, 4, 7, 10];

export class Note {
    name: NoteName;
    octave: number;

    constructor(name: NoteName, octave: number) {
        this.name = name;
        this.octave = octave;
    }

    // 주파수로부터 노트 생성 (간단한 구현)
    static fromFrequency(frequency: number): Note {
        // A4 (440Hz)를 기준으로 노트 계산
        const A4 = 440;
        const noteNames: NoteName[] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

        // MIDI 번호를 기반으로 노트 번호 계산
        const noteNumber = 12 * Math.log2(frequency / A4) + 69;
        const roundedNoteNumber = Math.round(noteNumber);

        // 옥타브 계산
        const octave = Math.floor(roundedNoteNumber / 12) - 1;

        // 노트 이름 계산
        const name = noteNames[roundedNoteNumber % 12];

        return new Note(name, octave);
    }

    // 노트로부터 주파수 생성
    toFrequency(): number {
        // A4 (440Hz)를 기준으로 노트 계산
        const A4 = 440;
        const noteNames: NoteName[] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

        // 노트 번호 계산
        const noteNumber = 12 * this.octave + noteNames.indexOf(this.name) + 1;

        // 주파수 계산
        return A4 * Math.pow(2, (noteNumber - 49) / 12);
    }

    // 노트 이름 반환
    toString(): string {
        return this.name + this.octave;
    }

    // 반음계 이동
    transpose(semitones: number): Note {
        const noteNames: NoteName[] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const noteIndex = noteNames.indexOf(this.name);
        const newNoteIndex = (noteIndex + semitones) % 12;
        const newOctave = this.octave + Math.floor((noteIndex + semitones) / 12);
        return new Note(noteNames[newNoteIndex], newOctave);
    }

    getMajorChord(): Note[] {
        return majorChordTransposition.map(transposition =>
            this.transpose(transposition)
        );
    }

    getMinorChord(): Note[] {
        return minorChordTransposition.map(transposition =>
            this.transpose(transposition)
        );
    }

    getSeventhChord(): Note[] {
        return seventhChordTransposition.map(transposition =>
            this.transpose(transposition))
    }

    // 계이름 반환
    toKorean(): NoteNameKor {
        const noteIndex = NOTE_NAMES.indexOf(this.name);
        return KOR_NOTE_NAMES[noteIndex];
    }
}