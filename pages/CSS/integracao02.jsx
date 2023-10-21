import Style from "./integracao02.module.css"
export default function integracao02() {
    return (
        <>
            <div>
                <div className={Style.vermelho}>Texto #01</div>
                <div className={Style.amarelo}>Texto #02</div>
                <div className={Style.verde}>Texto #03</div>
            </div>
        </>
    )
}