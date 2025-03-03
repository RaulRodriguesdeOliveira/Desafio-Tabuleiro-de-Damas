import Soma from "./Components/Soma";
import Multiplicacao from "./Components/Multiplicacao";

export default function Exercicio2 () {


    return (
        <div>
            ======= Soma =======
            <Soma primeiroValor={3} segundoValor={5} />
            ======= Multiplicação =======
            <Multiplicacao primeiroValor={3} segundoValor={5} />
        </div>
    )
}