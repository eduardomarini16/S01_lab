from abc import ABC, abstractmethod


class IUnidadeDeRede(ABC):
    @abstractmethod
    def executar_invasao(self):
        pass


class Cyberdeck:
    def __init__(self, modelo):
        self.modelo = modelo


class OperadorNetrunner(IUnidadeDeRede):
    def __init__(self, nome, modelo_cyberdeck):
        self.nome = nome
        self.cyberdeck = Cyberdeck(modelo_cyberdeck)

    def executar_invasao(self):
        print(
            f"{self.nome} usa o cyberdeck {self.cyberdeck.modelo} "
            "para quebrar o gelo (ICE) de um servidor."
        )


class DroneDeVigilancia(IUnidadeDeRede):
    def __init__(self, codigo):
        self.codigo = codigo

    def executar_invasao(self):
        print(f"Drone {self.codigo} está interceptando o sinal da rede.")


class CelulaHacker:
    def __init__(self, nome, membros: list[IUnidadeDeRede]):
        self.nome = nome
        self.membros = membros

    def iniciar_ataque(self):
        print(f"A célula {self.nome} iniciou o ataque!")
        for membro in self.membros:
            membro.executar_invasao()


netrunner = OperadorNetrunner("V", "Militech Paraline")
drone = DroneDeVigilancia("DR-07")

celula = CelulaHacker("Fantasma", [netrunner, drone])
celula.iniciar_ataque()

# Não é possível instanciar uma classe abstrata:
# unidade = IUnidadeDeRede()