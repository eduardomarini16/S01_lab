# Classe para os coquetéis comuns do Afterlife
class CoquetelAfterlife
  attr_reader :nome

  def initialize(nome, preco)
    @nome = nome
    @_preco = preco
  end

  def preco
    @_preco
  end

  def preco=(valor)
    if valor >= 5 && valor <= 200
      @_preco = valor
    else
      puts "Preço inválido!"
    end
  end

  def ficha
    "#{@nome} - R$ #{preco}"
  end
end


class DrinkDeLenda < CoquetelAfterlife
  attr_reader :lenda

  def initialize(nome, preco, lenda)
    super(nome, preco)
    @lenda = lenda
  end

  def ficha
    "#{super} - Homenagem a: #{@lenda}"
  end
end


drinks = [
  CoquetelAfterlife.new("Night City", 25),
  DrinkDeLenda.new("Johnny Silverhand", 45, "Johnny Silverhand"),
  DrinkDeLenda.new("Jackie Welles", 35, "Jackie Welles")
]


drinks.each do |drink|
  puts drink.ficha
end


johnny.preco = 500 # Preço inválido; o preço anterior é mantido
johnny.preco = 80
puts johnny.ficha

# Esta linha gera erro, pois nome tem apenas um getter:
# johnny.nome = "Outro nome"
