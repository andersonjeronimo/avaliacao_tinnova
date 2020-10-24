const Matematica = class {
    constructor(numero) {
        this.numero = numero;
    }

    fatorial() {
        let n = this.numero;
        let resultado = n;
        for (let i = n - 1; i > 1; i--) {
            resultado = resultado * i;
        }
        return resultado;
    }

    somaMultiplos(m1, m2) {
        let n = this.numero;
        let resultado = 0;
        for (let i = n - 1; i > 0; i--) {
            if (i % m1 == 0 || i % m2 == 0) {
                resultado = resultado + i;
            }
        }
        return resultado;
    }

};

module.exports = Matematica;