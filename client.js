const net = require('net');

const client = net.Socket();

const clientConnected = () => {
     

    //client.write("CADASTRAR/1555/Casa Monte Sinai/quarto/rua dois casa 5 Bairro dos Ricos");
    //LISTAR IMOVEIS DISPONIVEL

    

    //RESERVAR/13/12-12-2020/12-25-2020
    client.write("RESERVAR/13/12-12-2020/12-25-2020");
    
    
    client.on("data", (data) => {
        
        client.write("FINALIZA");
    });
}

client.connect(3000, "127.0.0.1", clientConnected)