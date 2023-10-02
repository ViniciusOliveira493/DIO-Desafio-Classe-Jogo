const scanner = require("prompt-sync")();

// -------- Classe
class Heroi{
    nome;
    idade;
    tipo;

    constructor(){

    }

    atacar(){
        switch (this.tipo.toUpperCase()) {
            case 'GUERREIRO':
                this.mensagemDeAtaque("espada");
                break;

            case 'MAGO':
                this.mensagemDeAtaque("magia");
                break;

            case 'MONGE':
                this.mensagemDeAtaque("artes marciais");
                break;

            case 'NINJA':
                this.mensagemDeAtaque("shuriken");
                break;  

            default:
                this.mensagemDeAtaque("ataque básico")
                break;
        }
    }

    mensagemDeAtaque(arma){
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${arma} e causou ${this.calcularDano(arma)} de dano`);
    }

    calcularDano(arma){
        if(arma != "ataque básico"){
            return parseInt(Math.random() * 31) + 30;
        }

        return parseInt(Math.random() * 11) + 10;
    }
}

// -------- LOOP ----
while (true) {
   let heroi = criarHeroi();

   console.log("\n");

   let jogando = true;
   while (jogando) {
        let txt = `Digite 1 para "Atacar" com o herói ${heroi.nome} ou Digite 2 para criar um novo herói: `;
        let escolha = scanner(txt);
        
        switch (escolha) {
            case "1":
                heroi.atacar();
                break;

            case "2":
                jogando = false;
                break;
        
            default:
                console.log("opção inválida");
                break;
        }

        console.log("\n \n");
   }
}

// ---- Função

function criarHeroi(){
    console.log("------- Crie um Herói --------");
    let heroi = new Heroi();
    heroi.nome = scanner("Digite o nome do herói: ");
    heroi.tipo = scanner("Digite o tipo do herói ( guerreiro | mago | monge | ninja ): ");
    heroi.idade = scanner("Digite a idade do herói: ");
    
    console.log(`O herói ${heroi.nome} foi criado`)
    return heroi;
}
