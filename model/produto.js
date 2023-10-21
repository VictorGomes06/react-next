export default class Produto {
    #id
    #nome
    #preco

    //Costrutor
    constructor(id, nome, preco) {
        this.#id = id
        this.#nome = nome
        this.#preco = preco
    }
    //gets para acessar os atributos
    get id() {
        return this.#id
    }
    get nome() {
        return this.#nome
    }
    get preco() {
        return this.#preco
    }
}