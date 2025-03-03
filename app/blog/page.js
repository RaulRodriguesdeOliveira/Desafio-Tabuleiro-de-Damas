export default function BlogPage() {
    const subtitulo = "Estamos aprendendo NEXT JS"
    const valor = <h3>{3 + 3}</h3>

    return (
        <>
            <h1>Blog Page</h1>
            <h2>{subtitulo}</h2>
            {valor}
        </>
    )
}