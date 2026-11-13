class Node {
    constructor(valor) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
}

class ArvoreBinaria {
    constructor() {
        this.raiz = null;
    }

    adicionar(valor) {
        const novoNode = new Node(valor);
        if (this.raiz === null) {
            this.raiz = novoNode;
            return this;
        }
        let atual = this.raiz;
        while (true) {
            if (valor === atual.valor) return undefined;

            if (valor < atual.valor) {
                if (atual.esquerda === null) {
                    atual.esquerda = novoNode;
                    return this;
                }
                atual = atual.esquerda;
            } else {
                if (atual.direita === null) {
                    atual.direita = novoNode;
                    return this;
                }
                atual = atual.direita
            }

        }
    }

    print() {
        if (this.raiz === null) {
            console.log("(Árvore vazia)");
            return;
        }

        // A pilha guarda objetos com o estado de indentação de cada nó
        const pilha = [{ no: this.raiz, prefixo: "", isEsquerda: false }];

        while (pilha.length > 0) {
            const { no, prefixo, isEsquerda } = pilha.pop();

            if (no === this.raiz) {
                console.log(`${no.valor}`);
            } else {
                const conector = isEsquerda ? "└── " : "├── ";
                console.log(`${prefixo}${conector}${no.valor}`);
            }

            const novoPrefixo =
                no === this.raiz ? "" : prefixo + (isEsquerda ? "    " : "│   ");
            if (no.esquerda !== null) {
                pilha.push({ no: no.esquerda, prefixo: novoPrefixo, isEsquerda: true });
            }
            if (no.direita !== null) {
                pilha.push({ no: no.direita, prefixo: novoPrefixo, isEsquerda: false });
            }
        }


    }
}

const bst = new ArvoreBinaria();

bst.adicionar(10);
bst.adicionar(5);
bst.adicionar(15);
bst.adicionar(3);
bst.adicionar(7);
bst.adicionar(12);
bst.adicionar(18);

bst.print()

