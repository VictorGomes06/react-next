export default function listas() {
    return (
        <>
            {geras(10)}
        </>
    )
}

function geras(quantidade) {
    const lista = []
    for (let i = 0; i <= quantidade; i++) {
        lista.push(<span>{i},</span>);
    }

    return lista
}

