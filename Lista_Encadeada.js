class No {
    constructor(valor) {
        this.valor = valor
        this.proximo = null
    }

}

class ListaEncadeada {
    constructor() {
        this.inicio = null
    }

    inserirInicio(valor) {
        const novo = valor
        novo.proximo = this.inicio
        this.inicio = novo
    }

    inserirFim(valor) {
        const novo = valor
        if (this.inicio === null) {
            this.inicio = novo
            return
        }
        let atual = this.inicio
        while (atual.proximo !== null) {
            atual = atual.proximo
        }
        atual.proximo = novo
    }

    exibir() {
        let atual = this.inicio
        while (atual !== null) {
            console.log(atual.valor)
            atual = atual.proximo
        }
    }
}

const ana = new No("Ana")
const bia = new No("Bia")
const caio = new No("Caio")

ana.proximo = bia
bia.proximo = caio
caio.proximo = null

const lista = new ListaEncadeada()

lista.inicio = ana

const otavio = new No("Otavio")
const jamily = new No("Jamily")

lista.inserirInicio(jamily)
lista.inserirFim(otavio)
lista.exibir()