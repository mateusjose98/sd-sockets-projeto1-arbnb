const Reserva = require("./Reserva");
const Imovel = require("./Imovel");

class Cliente {


    constructor(nome, cpf){
        this.nome = nome;
        this.cpf = cpf;
        this.imoveisDoCliente = [];
        this.reservasDoCliente = [];
    }

    cadastrarImovel(codigo, nome, tipo, endereco){
        const novoImovel = new Imovel(codigo, nome, tipo, endereco);
        this.imoveisDoCliente.push(novoImovel);
    }

    realizarReserva(imovel, dataInicialReserva, dataFinalReserva){
        const minhaReserva = imovel.reservar(dataInicialReserva, dataFinalReserva);
        
        this.reservasDoCliente.push(minhaReserva);
    }

    pesquisarPorCodigo(ArrayImoveis, codigoBuscado){
        for (let i = 0; ArrayImoveis.length; i++){
            if(ArrayImoveis[i].codigo === codigoBuscado){
                return ArrayImoveis[i];
            }
        }
    }

    datasDisponiveis(ArrayImoveis, codigoBuscado){
        const imovelSelecionado = this.pesquisarPorCodigo(ArrayImoveis, codigoBuscado);
        for (let rer of imovelSelecionado){
            return `Todos dos dias exceto: ${rer.reservas.dataInicialReserva} à ${rer.reservas.dataFinalReserva}`;
        }
    }


}

module.exports = Cliente;