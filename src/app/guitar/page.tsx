import Fretboard from "@/components/guitar/fretboard";

export default function Page() {
    return <main className={"bg-gray-300 text-black h-screen "}>
        <h1>기타</h1>
        <p>기타 연습 페이지입니다.</p>

        <div className={"p-4"}>
            <Fretboard/>
        </div>

    </main>
}