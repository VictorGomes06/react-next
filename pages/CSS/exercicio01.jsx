import Style from "./exercicio01.module.css"
import Titulo from "@/components/Titulo"
import Subtitulos from "@/components/Subtitulo"
import Descricao from "@/components/descricao"
import Imagens from "@/components/Imagens"
export default function exercicio01() {

    return (
        <>
            <div className={Style.main} >
                <section className={Style.titulo}>
                    <Titulo></Titulo>
                </section>
                <section className={Style.subtitulo}>
                    <Subtitulos></Subtitulos>
                </section>
                <section className={Style.img}>
                    <Imagens></Imagens>
                </section>
                <section className={Style.paragrafos}>
                    <Descricao></Descricao>
                </section>
            </div>
        </>
    )
}