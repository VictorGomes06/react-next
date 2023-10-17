import { Combo } from "next/font/google";

export default function formulario() {

    return (<>
        <main>
            <form action="">
                <div>
                    <label htmlFor="">Cadstro de produto</label>
                </div>
                <div>
                    <label htmlFor="">Nome :</label>
                    <input type="text" name="nome" id="nome" required />
                </div>
                <div>
                    <div>
                        <label htmlFor="">Descrição :</label>
                    </div>
                    <textarea name="descricao" id="descricao" cols="30" rows="10" required></textarea>
                </div>
                <div>
                    <label htmlFor="">Preço :</label>
                    <input type="number" name="preco" id="preco" />
                </div>
                <div>
                    <label htmlFor="">Categoria :</label>
                    <select name="categorias" id="categorias">
                        <option value="eletronicos">Eletrônicos</option>
                        <option value="roupas">Roupas</option>
                        <option value="alimentps">Alimentos</option>
                        <option value="outros">Outros</option>
                    </select>

                    <div>
                        <button>Cadastrar</button>
                    </div>
                </div>
            </form>
        </main>

    </>
    )
}