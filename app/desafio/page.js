"use client"
import LinhaA from "./Components/LinhaA";
import LinhaB from "./Components/LinhaB";
import { Tabuleiro } from "./css/style";

export default function Page() {
    return (
        <Tabuleiro>
            <h1>Jogo de damas</h1>
            <LinhaB blue/>
            <LinhaA blue/>
            <LinhaB blue/>
            <LinhaA />
            <LinhaB />
            <LinhaA green/>
            <LinhaB green />
            <LinhaA green/>
        </Tabuleiro>
    )
}