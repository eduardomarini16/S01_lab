class Instrumentista
  attr_reader :nome, :instrumento

  def initialize(nome, instrumento)
    @nome = nome
    @instrumento = instrumento
  end

  def interpretar(peca)
    raise NotImplementedError, "Cada instrumentista deve definir como interpreta a peça."
  end
end

class Solista < Instrumentista
  def interpretar(peca)
    puts "#{@nome} toca #{@instrumento} na peça #{peca}, conduzindo a melodia principal."
  end
end

class Acompanhador < Instrumentista
  def interpretar(peca)
    puts "#{@nome} toca #{@instrumento} na peça #{peca}, acompanhando o ritmo do solista."
  end
end

class Regente
  def initialize(nome)
    @nome = nome
    @orquestra = []
  end

  def convocar(instrumentista)
    @orquestra << instrumentista
  end

  def reger(peca)
    puts "Regente #{@nome} conduz a peça #{peca}."

    @orquestra.each do |instrumentista|
      instrumentista.interpretar(peca)
    end
  end

  def escalacao
    @orquestra.map do |instrumentista|
      "#{instrumentista.class}: #{instrumentista.nome}"
    end
  end
end

solista = Solista.new("Kaori", "violino")
acompanhador = Acompanhador.new("Takeshi", "piano")
regente = Regente.new("Maestro Saito")

regente.convocar(solista)
regente.convocar(acompanhador)

regente.reger("Concerto para violino")

puts "Escalação:"
regente.escalacao.each do |texto|
  puts texto
end

# Um Instrumentista pode ser criado, mas não sabe interpretar por conta própria
instrumentista_generico = Instrumentista.new("Músico", "flauta")
# instrumentista_generico.interpretar("Concerto") # Gera NotImplementedError
