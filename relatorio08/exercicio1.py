class MortoVivo:
    def __init__(self, nome, almas, estus):
        self.nome = nome
        self._almas = almas
        self.__estus = estus

    def get_esstus(self):
        return self.__estus

    def set_estus(self, quantidade):
        if 0 <= quantidade <= 10:
            self.__estus = quantidade
        else:
            print("Quantidade de Estus inválida!")

    def mostrar_status(self):
        return f"Morto vivo {self.nome} | Almas: {self._almas} | Estus: {self.__estus}"

petrus = MortoVivo("Petrus", 2000, 5)
print(petrus.mostrar_status())
petrus.set_estus(11)