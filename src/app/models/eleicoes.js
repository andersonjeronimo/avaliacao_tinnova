const Eleicoes = class {
    constructor(totalEleitores, votosValidos, votosBrancos, votosNulos) {
        this.totalEleitores = totalEleitores;
        this.votosValidos = votosValidos;
        this.votosBrancos = votosBrancos;
        this.votosNulos = votosNulos;
    }

    percentualValidos() {
        return this.votosValidos / this.totalEleitores * 100;
    }

    percentualBrancos() {
        return this.votosBrancos / this.totalEleitores * 100;
    }

    percentualNulos() {
        return this.votosNulos / this.totalEleitores * 100;
    }
};

module.exports = Eleicoes;