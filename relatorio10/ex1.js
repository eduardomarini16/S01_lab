class Pokemon {
  #vida; // Atributo privado: só pode ser acessado dentro da classe

  constructor(apelido, tipo, vidaInicial) {
    this.apelido = apelido; 
    this.tipo = tipo;       
    this.#vida = vidaInicial;
  }

  // Getter para consultar a vida. Não existe setter.
  get vida() {
    return this.#vida;
  }

  sofrerDano(pontos) {
    this.#vida -= pontos;

    if (this.#vida < 0) {
      this.#vida = 0;
    }

    console.log(`${this.apelido} ficou com ${this.#vida} de vida.`);
  }

  atacar(alvo) {
    console.log(`${this.apelido} fez um ataque genérico!`);
    alvo.sofrerDano(10);
  }
}

class Squirtle extends Pokemon {
  constructor(apelido, vidaInicial) {
    super(apelido, "Água", vidaInicial);
  }

  atacar(alvo) {
    console.log(`${this.apelido} usou Jato d'Água!`);
    alvo.sofrerDano(20);
  }
}

class Bulbasaur extends Pokemon {
  constructor(apelido, vidaInicial) {
    super(apelido, "Planta", vidaInicial);
  }

  atacar(alvo) {
    console.log(`${this.apelido} usou Chicote de Vinha!`);
    alvo.sofrerDano(15);
  }
}

const squirtle = new Squirtle("Tartaruga", 100);
const bulbasaur = new Bulbasaur("Folhinha", 30);

bulbasaur.atacar(squirtle); // Squirtle recebe 15 de dano
squirtle.atacar(bulbasaur); // Bulbasaur recebe 20 de dano
squirtle.atacar(bulbasaur); // Bulbasaur recebe mais 20 de dano

console.log(`Vida do ${squirtle.apelido}: ${squirtle.vida}`);
console.log(`Vida do ${bulbasaur.apelido}: ${bulbasaur.vida}`);

// Se descomentar a linha abaixo, o JavaScript gera um erro de sintaxe
// porque #vida é privado e não pode ser acessado fora da classe.
// console.log(squirtle.#vida);