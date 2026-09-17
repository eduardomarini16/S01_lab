#include <iostream>
#include <iomanip>
using namespace std;

float calcular_confiabilidade_sistema(float probabilidades[], int tamanho) {
    float confiabilidade = 1.0f;

    for (int i = 0; i < tamanho; i++) {
        confiabilidade *= probabilidades[i];
    }

    return confiabilidade;
}

int main() {
    int N;

    cout << "Digite a quantidade de componentes: ";
    if (!(cin >> N) || N <= 0) {
        cout << "Quantidade invalida." << endl;
        return 1;
    }

    float* probabilidades = new float[N];

    for (int i = 0; i < N; i++) {
        cout << "Digite a probabilidade do componente " << i + 1 << " (ex:0.95): ";

        if (!(cin >> probabilidades[i]) ||
            probabilidades[i] < 0.0f || probabilidades[i] > 1.0f) {
            cout << "Probabilidade invalida." << endl;
            delete[] probabilidades;
            return 1;
        }
    }

    float resultado = calcular_confiabilidade_sistema(probabilidades, N);
    float resultado_percen = (resultado*100);



   cout << "Confiabilidade total do sistema: " << resultado
     << " (" << fixed << setprecision(2) << resultado_percen << "%)" << endl;
    

    delete[] probabilidades;

    return 0;
}