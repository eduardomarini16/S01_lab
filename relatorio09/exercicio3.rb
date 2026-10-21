class PhoneWave
  def enviar_dmail(mensagem)
    puts "Mensagem enviada: #{mensagem}"
    puts "Esta mensagem foi enviada para o passado!"
  end
end

class MembroDoLab
  attr_reader :numero, :nome

  def initialize(numero, nome)
    @numero = numero
    @nome = nome
  end
end

class LaboratorioDeGadgets
  def initialize
    # Composição: o laboratório cria e guarda seu próprio PhoneWave.
    @phonewave = PhoneWave.new
    @membros = []
  end

  def admitir(membro)
    @membros << membro
    puts "Lab Mem No. #{membro.numero}: #{membro.nome} foi admitido no laboratório."
  end

  def experimento(mensagem)
    puts "Membros presentes no experimento:"

    @membros.each do |membro|
      puts "Lab Mem No. #{membro.numero}: #{membro.nome}"
    end

    @phonewave.enviar_dmail(mensagem)
  end
end

# Os membros são criados antes do laboratório e continuam existindo fora dele.
# Isso representa agregação: o laboratório recebe objetos MembroDoLab já criados.
okabe = MembroDoLab.new(1, "Okabe Rintaro")
kurisu = MembroDoLab.new(2, "Makise Kurisu")

laboratorio = LaboratorioDeGadgets.new
laboratorio.admitir(okabe)
laboratorio.admitir(kurisu)
laboratorio.experimento("A banana virou gelatina!")
