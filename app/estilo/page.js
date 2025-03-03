import Estilo from "./Components/Estilo"
import estilo from "./css/style.module.css"

export default function EstiloPage() {
    return (
        <div className={estilo.div}>
            <h1 className={estilo.h1} >Aula Estilo</h1>
        <button className={estilo.button}>Clique Aqui</button>
        <Estilo texto={"Vai chover!!!"} direita/>
        <Estilo texto={"Vai chover!!!"} />
        <Estilo />
        </div>
    )
}