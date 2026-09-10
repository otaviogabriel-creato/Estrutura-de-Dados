class Pilha {
    constructor() {
        this.pilha = []
    }

    empilhar(valor) {
        this.pilha.push(valor);
    }

    desempilhar() {
        return this.pilha.pop()
    }

    topoPilha() {
        return this.pilha[this.pilha.length - 1]
    }

    basePilha() {
        return this.pilha[0]

    }

    mostrarPilha() {
        console.log(this.pilha);

    }

    estavazia() {
        if (this.pilha.length === 0) {
            console.log("Está Vazia")
        }else{
            console.log("Não está vazia");
            
        }
    }

    tamanho() {
        return this.pilha.length
    }
}

let p = new Pilha();

p.empilhar(10);
p.empilhar(20);
p.empilhar(30);

console.log(p.desempilhar());
console.log(p);

p.empilhar(40);
console.log(p.basePilha());
console.log(p.topoPilha());
console.log(p);
console.log(p.tamanho());
p.estavazia();

class Acao {
    constructor(tipo, texto) {
        this.tipo = tipo
        this.texto = texto
    }
}
const historico = new Pilha()

historico.empilhar(new Acao("inserir", "Olá"))
historico.empilhar(new Acao("inserir", " turma"))
historico.empilhar(new Acao("apagar", " turma"))


while (!historico.estavazia()) {
    const acao  = historico.desempilhar()
    console.log(`Desfazendo: ${acao.tipo} "${acao.texto}"`)
}
