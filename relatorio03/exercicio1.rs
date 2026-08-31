use std::io;

fn validar_placa(placa: &str) -> bool {
    let quantidade_letras = placa
        .chars()
        .filter(|c| c.is_ascii_uppercase())
        .count();

    let quantidade_numeros = placa
        .chars()
        .filter(|c| c.is_numeric())
        .count();
    
    placa.chars().count() >= 7
        && quantidade_letras >= 4
        && quantidade_numeros >= 2
}

fn main() {
    loop {
        let mut placa = String::new();
        println!("Digite a placa do veiculo");

        io::stdin()
            .read_line(&mut placa)
            .expect("Erro ao ler a placa");
        
        let placa = placa.trim();

        if validar_placa(placa) {
            println!("Placa cadastrada");
            break;
        } else {
            println!("Placa invalida! Digite novamente.")
        }
    }
}