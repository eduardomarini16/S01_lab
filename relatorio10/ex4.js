class UsuarioDeNen {
  constructor(nome) {
    this.nome = nome;
  }

  atacar(alvo) {
    console.log(
      `${this.nome} lançou um ataque genérico de aura contra ${alvo.nome}!`
    );
  }
}

class Intensificador extends UsuarioDeNen {
  atacar(alvo) {
    console.log(
      `${this.nome} usou sua força para atacar ${alvo.nome}!`
    );
  }
}

class Transmutador extends UsuarioDeNen {
  atacar(alvo) {
    console.log(
      `${this.nome} transformou sua aura em eletricidade e atacou ${alvo.nome}!`
    );
  }
}

class Materializador extends UsuarioDeNen {
  atacar(alvo) {
    console.log(
      `${this.nome} materializou uma corrente para atacar ${alvo.nome}!`
    );
  }
}

class Aranha {
  constructor(nome, numero) {
    this.nome = nome;
    this.numero = numero;
  }
}

class TrupeFantasma {
  #aranhas;

  constructor(cidade, aranhas = []) {
    this.cidade = cidade;
    this.#aranhas = aranhas;
  }

  revelarAranhas() {
    console.log(`Aranhas avistadas em ${this.cidade}:`);

    this.#aranhas.forEach((aranha) => {
      console.log(`Número ${aranha.numero}: ${aranha.nome}`);
    });
  }

  buscarAranha(numero) {
    return this.#aranhas.find((aranha) => aranha.numero === numero);
  }
}

const aranha1 = new Aranha("Chrollo", 0);
const aranha2 = new Aranha("Machi", 3);

const trupe = new TrupeFantasma("Yorknew", [aranha1, aranha2]);

trupe.revelarAranhas();

const alvo = trupe.buscarAranha(3);

const usuarios = [
  new Intensificador("Gon"),
  new Transmutador("Killua"),
  new Materializador("Kurapika"),
];

usuarios.forEach((usuario) => {
  usuario.atacar(alvo);
});