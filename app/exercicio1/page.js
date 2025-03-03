export default function ExercicioPage() {

    const numeros = [];
    for (let i = 1; i<= 10; i++) {
        numeros.push(<span key={i}>{i}</span>)
    }


    return (
        <div>
            {numeros}
        </div>
    )
}