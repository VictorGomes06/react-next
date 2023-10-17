export default function jsx4() {
    const subtitulo = `Estou no javaScript !`;
    let outroSubtitulo = `Contimuo no javaScript !`

    return (
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subtitulo}</h2>
            <h3>{Math.max(10, 30, 40)}</h3>
            <h3>{Math.min(95, 3500)}</h3>
            <h4>{entre(1, 1, 10)}</h4>
        </div>
    )
    function entre(valor, min, max) {
        if (valor >= min && valor <= max) {
            return "Sim"
        }
        else {
            return "Não"
        }
    }
}
