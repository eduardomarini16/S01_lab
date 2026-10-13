class Persona:
    def __init__(self, nome, arcano):
        self.nome = nome
        self.arcano = arcano

    def invocar(self):
        print(f"Persona: {self.nome} | Arcano: {self.arcano}")

class Aliado:
    def __init__(self, nome, codinome):
            self.nome = nome
            self.codinome = codinome

class Lider:
    def __init__(self, codinome):
        self.codinome = codinome
        self.persona = Persona("Arsène", "Louco")
        self._equipe = []

    def recrutar(self, aliado:Aliado):
         self._equipe.append(aliado)

    def infiltrar(self, palacio):
         print(f"Palácio de {palacio} invadido!")
         self.persona.invocar()

         print("Equipe: ")
         for aliado in self._equipe:
               print(f"{aliado.codinome} ({aliado.nome})")
              

ryuji = Aliado("Ryuji Sakamoto", "Skull")
ann = Aliado("Ann Takamaki", "Panther")

joker = Lider("Joker")
joker.recrutar(ryuji)
joker.recrutar(ann)

joker.infiltrar("Kamoshida")
    
     

      

    
