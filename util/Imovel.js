const Reserva = require("./Reserva");

class Imovel{


    constructor(codigo, nome, tipo, endereco){


        this.codigo = codigo;
        this.nome = nome;
        this.tipo = tipo;
        this.endereco = endereco;
        this.disponivel = true;
        this.reservas = [];


    }

    reservar(dataInicialReserva, dataFinalReserva){

        this.setaDisponibilidade();
        if (this.disponivel){            
            this.reservas.push(new Reserva(this, dataInicialReserva, dataFinalReserva));
        }

        this.setaDisponibilidade();

        
    }


    mostrarReservas(){
        return this.reservas;
    }
 

    existeReserva(){

        if (this.reservas.length > 0){
            return true
        }    
        return false;

    }
    
    setaDisponibilidade(){

        if(this.existeReserva()){
            for (let reservaAtual of this.reservas){
                const hoje = new Date();
                console.log(hoje >= reservaAtual.dataInicialReserva);
                if (hoje >= reservaAtual.dataInicialReserva && hoje <= reservaAtual.dataFinalReserva){
                    this.disponivel = false;
                }
                else{
                    this.disponivel = true;
                }
                
            }
        }


    }


   setaDataInicialReserva (data) {
      this.dataInicialReserva = new Data(data);
    }


      setaDataFinalReserva(dias){
         this.dataFinalReserva = this.dataInicialReserva.adicionarDias(dias);
    }
 }
 

 module.exports = Imovel; 