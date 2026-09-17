#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double capacidade, cargaAtual = 0.0, peso;
    int opcao = 0;

    cout << "Informe a capacidade maxima de carga do drone (kg): ";
    if (!(cin >> capacidade) || capacidade <= 0) {
        cout << "Capacidade invalida!\n";
        return 1;
    }

    cout << fixed << setprecision(2);

    do {
        cout << "\n=== SISTEMA DE CARGA DO DRONE ===\n";
        cout << "1. Verificar Carga Atual\n";
        cout << "2. Carregar Pacote\n";
        cout << "3. Descarregar Pacote\n";
        cout << "4. Encerrar Operacao\n";
        cout << "Escolha uma opcao: ";

        if (!(cin >> opcao)) {
            if (cin.eof()) {
                break;
            }

            cin.clear();
            cin.ignore(10000, '\n');
            cout << "Opcao invalida!\n";
            continue;
        }

        switch (opcao) {
            case 1:
                cout << "Carga Atual: " << cargaAtual
                     << " kg / " << capacidade << " kg\n";
                cout << "Espaco Disponivel: "
                     << capacidade - cargaAtual << " kg\n";
                break;

            case 2:
            case 3:
                if (opcao == 2) {
                    cout << "Digite o peso do pacote a ser carregado (kg): ";
                } else {
                    cout << "Digite o peso a ser removido (kg): ";
                }

                if (!(cin >> peso)) {
                    if (cin.eof()) {
                        return 0;
                    }

                    cin.clear();
                    cin.ignore(10000, '\n');
                    cout << "Peso invalido!\n";
                    break;
                }

                if (peso <= 0) {
                    cout << "O peso deve ser maior que zero!\n";
                    break;
                }

                if (opcao == 2) {
                    if (peso > capacidade - cargaAtual) {
                        cout << "Alerta: Peso máximo de decolagem excedido! "
                             << "Operação cancelada.\n";
                    } else {
                        cargaAtual += peso;
                        cout << "Pacote adicionado com sucesso!\n";
                    }
                } else {
                    if (peso > cargaAtual) {
                        cout << "Alerta: O peso informado excede a carga atual! "
                             << "Operacao cancelada.\n";
                    } else {
                        cargaAtual -= peso;
                        cout << "Pacote removido com sucesso!\n";
                    }
                }
                break;

            case 4:
                cout << "Encerrando sistema de telemetria.\n";
                break;

            default:
                cout << "Opcao invalida!\n";
        }

    } while (opcao != 4);

    return 0;
}