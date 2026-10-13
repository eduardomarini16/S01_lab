class HeroiOverwatch:
    def __init__(self, codinome, funcao):
        self.codinome = codinome
        self.funcao = funcao

    def usar_suprema(self):
        print (f"{self.codinome} usa uma suprema genérica!")

class HeroiTanque(HeroiOverwatch):
    def usar_suprema(self):
        print(f"{self.codinome} usa uma suprema de tanque!")


class HeroiSuporte(HeroiOverwatch):
    def usar_suprema(self):
        print(f"{self.codinome} usa uma suprema de suporte!")

    def curar_equipe(self):
        print(f"{self.codinome} cura a equipe!")


herois: list[HeroiOverwatch] = [
    HeroiTanque("Reinhardt", "Tanque"),
    HeroiSuporte("Mercy", "Suporte"),
    HeroiOverwatch("Soldado 76", "Dano"),
]

for heroi in herois:
    heroi.usar_suprema()
    if isinstance(heroi, HeroiSuporte):
        heroi.curar_equipe()