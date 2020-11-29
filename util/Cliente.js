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
        console.log(minhaReserva)
        if(minhaReserva !== undefined) this.reservasDoCliente.push(minhaReserva);
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
        for (let rer of imovelSelecionado.reservas){
            console.log(`Todos dos dias exceto: ${rer.dataInicialReserva} à ${rer.dataFinalReserva}`);

        }
            
        
        
    }


}

module.exports = Cliente;