// A pistola é criada junto com o agente.
// Isso representa composição.
class Pistola {
  constructor(modelo) {
    this.modelo = modelo;
  }
}

class AgenteProtocolo {
  #pistola; // Atributo privado

  constructor(codinome, modeloDaPistola) {
    this.codinome = codinome; 

    // Cada agente cria e guarda a sua própria pistola.
    this.#pistola = new Pistola(modeloDaPistola);
  }

  usarHabilidade() {
    // A classe base não define uma habilidade específica.
    throw new Error("Cada agente precisa definir sua própria habilidade.");
  }

  entrarEmCombate() {
    console.log(
      `${this.codinome} entrou em combate com a pistola ${this.#pistola.modelo}.`
    );

   
    console.log(this.usarHabilidade());
  }
}

// Estas classes herdam de AgenteProtocolo e não precisam de constructor próprio.
class Controlador extends AgenteProtocolo {
  usarHabilidade() {
    return "Usou uma habilidade para controlar a área.";
  }
}

class Iniciador extends AgenteProtocolo {
  usarHabilidade() {
    return "Usou uma habilidade para ajudar a equipe a avançar.";
  }
}

class Duelista extends AgenteProtocolo {
  usarHabilidade() {
    return "Usou uma habilidade para entrar no confronto.";
  }
}

class Esquadrao {
  #agentes; 

  constructor(nome, agentes) {
    this.nome = nome;
    this.#agentes = agentes;
  }

  iniciarPartida() {
    console.log(`Esquadrão ${this.nome} iniciou a partida!`);

    // Cada agente executa sua própria versão de entrarEmCombate().
    this.#agentes.forEach((agente) => {
      agente.entrarEmCombate();
    });
  }

  listarControladores() {
    // Retorna somente os agentes que são instâncias de Controlador.
    return this.#agentes.filter((agente) => agente instanceof Controlador);
  }
}


const controlador1 = new Controlador("Omen", "Classic");
const controlador2 = new Controlador("Viper", "Ghost");
const iniciador = new Iniciador("Sova", "Sheriff");
const duelista = new Duelista("Jett", "Frenzy");

const esquadrao = new Esquadrao("Alpha", [
  controlador1,
  controlador2,
  iniciador,
  duelista,
]);

esquadrao.iniciarPartida();

const controladores = esquadrao.listarControladores();

controladores.forEach((controlador) => {
  console.log(`Controlador: ${controlador.codinome}`);
});

const agenteGenerico = new AgenteProtocolo("Agente", "Classic");

// Ao descomentar a linha abaixo, a chamada lança um erro.
// Ela é comentada para o restante do programa rodar.
// agenteGenerico.entrarEmCombate();