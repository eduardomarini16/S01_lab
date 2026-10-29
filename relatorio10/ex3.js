class FichaDeCriatura {
  constructor(criatura, nivelDePerigo) {
    this.criatura = criatura;
    this.nivelDePerigo = nivelDePerigo;
  }

  descrever() {
    return `Criatura: ${this.criatura} | Nível de perigo: ${this.nivelDePerigo}`;
  }
}

class DiarioMisterioso {
  #fichas;

  constructor(numero) {
    this.numero = numero;
    this.#fichas = [];
  }

  anotar(criatura, nivelDePerigo) {
    // A ficha é criada dentro do diário.
    const ficha = new FichaDeCriatura(criatura, nivelDePerigo);
    this.#fichas.push(ficha);
  }

  exibirFichas() {
    console.log(`Fichas do Diário ${this.numero}:`);

    this.#fichas.forEach((ficha) => {
      console.log(ficha.descrever());
    });
  }
}

class Funcionario {
  constructor(nome, cargo) {
    this.nome = nome;
    this.cargo = cargo;
  }
}

class CabanaDoMisterio {
  #funcionarios;

  constructor(dono) {
    this.dono = dono;
    this.#funcionarios = [];
  }

  contratar(funcionario) {
    this.#funcionarios.push(funcionario);
  }

  abrirAsPortas() {
    console.log(`A Cabana do Mistério, de ${this.dono}, abriu as portas!`);

    this.#funcionarios.forEach((funcionario) => {
      console.log(`${funcionario.nome} — ${funcionario.cargo}`);
    });
  }
}

const diario = new DiarioMisterioso(3);

diario.anotar("Gnomo", "Baixo");
diario.anotar("Zumbi", "Médio");
diario.anotar("Bill Cipher", "Extremo");

diario.exibirFichas();

const funcionario1 = new Funcionario("Mabel", "Atendente");
const funcionario2 = new Funcionario("Dipper", "Guia");

const cabana = new CabanaDoMisterio("Tio-avô Stan");

cabana.contratar(funcionario1);
cabana.contratar(funcionario2);

cabana.abrirAsPortas();