// criação da classe
class heroi {
  constructor(nome, idade, tipo) {
    //inicializando com nome, idade e tipo
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  // metodo atacar que exibe a mensagem de ataque
  atacar() {
    let ataque; //var para armazenar o tipo de ataque

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "shuriken";
    }
    //exibindo a mensagem do ataque
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

//Criando objetos com diferentes tipos de heroi
let mago = new heroi("Hugo", 47, "mago");
let guerreiro = new heroi("Matthus", 40, "guerreiro");
let monge = new heroi("Atrheus", 100, "monge");
let ninja = new heroi("Gaiden", 20, "ninja");

// Chamando todos os metodos de ataque para visualizar no terminal
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
