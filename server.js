const net = require("net");

const connectionListener = (socket) => {

    socket.on("data", (data) => {
        const comando = data.toString();
        console.log(comando);

        const parametros = comando.split(" ");
        console.log(parametros);

        if (parametros[0] === "MEDIA") {

            
            let media;

            if (parametros.length > 2) {
                media = (parseFloat(parametros[1]) + parseFloat(parametros[2]))/2
                socket.write(media.toString());
            }else {
                socket.write("FORMATO INVALIDO DE MENSAGEM")
            }

        } else if (parametros[0] === "FINALIZA") {
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