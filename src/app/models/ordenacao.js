const Ordenacao = class {
    constructor(vetor) {
        this.vetor = vetor;
    }

    bubbleSort() {
        let v = this.vetor;
        var iteracoes = v.length;
        while (iteracoes > 0) {
            for (let i = 0; i < v.length - 1; i++) {
                if (v[i] > v[i + 1]) {
                    var troca = v[i];
                    v[i] = v[i + 1];
                    v[i + 1] = troca;
                }
            }
            iteracoes--;
        }
        return v;

    }

};

module.exports = Ordenacao;