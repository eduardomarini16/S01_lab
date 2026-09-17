#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    int matriz_solar[5][5] = {};
    int opcao = 0;
    int fileira, coluna;

    while (opcao != 3) {
        cout << "\n=== TELEMETRIA DO PAINEL SOLAR ===\n";
        cout << "1. Ativar Celula\n";
        cout << "2. Ver Mapa da Matriz\n";
        cout << "3. Sair\n";
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
                cout << "Digite a fileira (0-4): ";
                cin >> fileira;

                cout << "Digite a coluna (0-4): ";
                cin >> coluna;

                if (cin.fail()) {
                    if (cin.eof()) {
                        opcao = 3;
                        break;
                    }

                    cin.clear();
                    cin.ignore(10000, '\n');
                    cout << "Erro: Digite apenas numeros inteiros!\n";
                    break;
                }

                if (fileira < 0 || fileira > 4 ||
                    coluna < 0 || coluna > 4) {
                    cout << "Erro: Fileira e coluna devem estar entre 0 e 4!\n";
                } else if (matriz_solar[fileira][coluna] == 0) {
                    matriz_solar[fileira][coluna] = 1;
                    cout << "Sucesso: Célula solar ativada!\n";
                } else {
                    cout << "Erro: Célula solar já está em operação!\n";
                }
                break;

            case 2:
                cout << "\n--- Mapa da Matriz Solar ---\n";

                for (int f = 0; f < 5; f++) {
                    for (int c = 0; c < 5; c++) {
                        cout << "[" << matriz_solar[f][c] << "] ";
                    }
                    cout << endl;
                }
                break;

            case 3:
                cout << "Encerrando operacao...\n";
                break;

            default:
                cout << "Opcao invalida!\n";
        }
    }

    int ativas = 0;
    int inativas = 0;

    for (int f = 0; f < 5; f++) {
        for (int c = 0; c < 5; c++) {
            if (matriz_solar[f][c] == 1) {
                ativas++;
            } else {
                inativas++;
            }
        }
    }

    double percentual = (ativas / 25.0) * 100;

    cout << "\n=== RELATORIO FINAL DE OPERACAO ===\n";
    cout << "Total de celulas ATIVAS: " << ativas << endl;
    cout << "Total de celulas INATIVAS: " << inativas << endl;
    cout << fixed << setprecision(2);
    cout << "Capacidade Operacional: " << percentual << "%\n";

    return 0;
}