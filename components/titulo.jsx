export default function titulo(props) {
    return (
        <>
            <h1>{props.Titulo}</h1>
            <h2>{props.Subtitulo}</h2>
            <h1>{props.principal}</h1>
            <h2>{props.secundario}</h2>
            <p>{props.terceiro}</p>
            <section>{props.anuncio}</section>
        </>
    )
}