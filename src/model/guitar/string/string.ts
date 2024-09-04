// 주파수 설정 (Hz)
const openStringFrequencies = [
    329.63,  // 1번 줄 E4
    246.94,  // 2번 줄 B3
    196.00,  // 3번 줄 G3
    146.83,  // 4번 줄 D3
    110.00,  // 5번 줄 A2
    82.41    // 6번 줄 E2
];

// 프렛별 주파수 계산
function calculateFretFrequency(openFrequency: number, fret: number): number {
    const semitoneRatio = Math.pow(2, 1/12);  // 12제곱근 2
    return openFrequency * Math.pow(semitoneRatio, fret);
}

interface StringProps {
    openStringIndex: number;
    fret: number;
}

