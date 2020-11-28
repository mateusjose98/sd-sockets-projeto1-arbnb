const net = require('net');

const client = net.Socket();

const clientConnected = () => {
    // console.log("Cliente conectado");

   
    client.write("MEDIA 0 0");
    
    
    client.on("data", (data) => {
        console.log("MEDIA: " + data.toString());
    
        client.write("FINALIZA");
    });
}

client.connect(3000, "127.0.0.1", clientConnected)