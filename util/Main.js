// // Este projeto consiste no desenvolvimento de um serviço de aluguel de quartos e apartamentos, no formato AirBnb.
//  O servidor deve fornecer serviços para o locador e o locatário.

// // Para isso, você deve desenvolver um protocolo da camada de aplicação para a comunicação entre um cliente e 
// um servidor que utilizam a API de Sockets do Node.js para se comunicarem.

// // Esse serviço deve permitir aos clientes:

// // Cadastrar um imóvel/quarto para reserva ok
// // Listar imóveis disponíveis
// // Reservar um imóvel/quarto ok
// // Ver as datas disponíveis para aluguel

const Imovel = require("./Imovel");
const Cliente = require("./Cliente");


const imoveis =[];

const imovel1 = new Imovel("12311",  "casa do joao", "AP", "rua A, n 12 centro");
const imovel2 = new Imovel("1233",  "QUITANDINHA DO OPA", "QUARTO", "rua B, n 12 centro");
const imovel3 = new Imovel("13",  "CASA DA MÃE JOANA", "AP", "rua C, n 12 centro");
const imovel4 = new Imovel(" 1",  "BBhouse", "QUARTO", "rua D, n 12 centro");

 
const pesquisarPorCodigo = function (ArrayImoveis, codigoBuscado){
    for (let i = 0; ArrayImoveis.length; i++){
        if(ArrayImoveis[i].codigo === codigoBuscado){
            return ArrayImoveis[i];
        }
    }
    return "Imovel não consta como cadastrado."
}


const cadastrarImovel = function (imoveis, imovel){
    imoveis.push(imovel);
}


const listarImoveis = function (imoveis) {
    return imoveis;
} 


cadastrarImovel(imoveis, imovel1);
cadastrarImovel(imoveis, imovel2);
cadastrarImovel(imoveis, imovel3);
cadastrarImovel(imoveis, imovel4);


const clienteTeste = new Cliente("José", "123000123-20");


const pesquisa = pesquisarPorCodigo(imoveis, "13");


clienteTeste.realizarReserva(pesquisa, '11-28-2020' , '12-28-2020');
clienteTeste.realizarReserva(pesquisa, '11-28-2020' , '12-28-2020');
clienteTeste.realizarReserva(pesquisa, '02-10-2010' , '02-11-2010');
clienteTeste.realizarReserva(pesquisa, '02-10-2010' , '02-11-2010');



//clienteTeste.datasDisponiveis(imoveis,"13");

// console.log(imoveis);


console.log(clienteTeste);

// console.log(pesquisa);


// console.log(imovel1);
// imovel1.reservar('11-28-2020', '12-28-2020');
// imovel1.reservar('11-28-2020', '12-28-2020');

// console.log(imovel1);



exports.imoveis = imoveis;

