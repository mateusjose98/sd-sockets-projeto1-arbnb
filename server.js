const net = require("net");
const Cliente = require("./util/Cliente");
const Imovel = require("./util/Imovel");
const Reserva = require("./util/Reserva");



const imoveis =[];

const imovel1 = new Imovel("12311",  "casa do joao", "AP", "rua A, n 12 centro");
const imovel2 = new Imovel("1233",  "QUITANDINHA DO OPA", "QUARTO", "rua B, n 12 centro");
const imovel3 = new Imovel("13",  "CASA DA MÃE JOANA", "AP", "rua C, n 12 centro");
const imovel4 = new Imovel("1",  "BBhouse", "QUARTO", "rua D, n 12 centro");



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

cadastrarImovel(imoveis, imovel1);
cadastrarImovel(imoveis, imovel2);
cadastrarImovel(imoveis, imovel3);
cadastrarImovel(imoveis, imovel4);


/////////////////////////////////////////////// SOCKETS //////////////////////////////////////////////
const connectionListener = (socket) => {

    socket.on("data", (data) => {
        const comando = data.toString();
       

        const parametros = comando.split("/");

        console.log(parametros);

        if (parametros[0] === "RESERVAR") {
            const codImovel = parametros[1];
            const dataInicial = parametros[2];
            const dataFinal = parametros[3];
            const imovel = pesquisarPorCodigo(imoveis, codImovel);
            console.log(imovel);
          
            const clienteTeste = new Cliente("José", "123000123-20");
            console.log(clienteTeste);
            clienteTeste.realizarReserva(imovel,dataInicial,dataFinal);


            
// CADASTRAR/1555/Casa Monte Sinai/quarto/rua dois casa 5 Bairro dos Ricos 
        }else if (parametros[0] === "CADASTRAR") {
            const codigoImovel = parametros[1];
            const nomeImovel =  parametros[2];
            const tipo = parametros[3];
            const endereco = parametros[4];
            
            const imovelNovo = new Imovel(codigoImovel, nomeImovel, tipo, endereco);

            cadastrarImovel(imoveis, imovelNovo);
 //LISTAR IMOVEIS DISPONIVEL/           
        }else if (parametros[0] === "LISTAR IMOVEIS DISPONIVEL") {

            const clienteTeste = new Cliente("José", "123000123-20");;
            clienteTeste.ImoveisDisponiveis(imoveis);
//DATAS DISPONIVEL PARA A RESERVA DO IMOVEL/13
        }else if (parametros[0] === "DATAS DISPONIVEL PARA A RESERVA DO IMOVEL") {
            const codigoBuscado = parametros[1];
            const clienteTeste = new Cliente("José", "123000123-20");;
            clienteTeste.datasDisponiveis(imoveis, codigoBuscado);
          
            
        }
        else if (parametros[0] === "FINALIZA") {
            socket.end();
        } else {
            socket.write("COMANDO_INVALIDO");
        }
    });

    socket.on("end", () => {
        console.log("Cliente desconectado!");
    });
}

const server = net.createServer(connectionListener);

server.listen(3000, "0.0.0.0");