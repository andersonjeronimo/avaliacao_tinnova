const Veiculo = class {
    constructor(veiculo, marca, ano, descricao, vendido) {
        this.veiculo = veiculo; //string
        this.marca = marca; //string
        this.ano = ano; //int
        this.descricao = descricao; //text
        this.vendido = vendido; //boolean
    }
};

module.exports = Veiculo;