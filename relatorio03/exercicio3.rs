use std::io;

fn imprimir_terminados_em(digito: i32, limite_inferior: i32, limite_superior: i32) {
    for numero in limite_inferior..=limite_superior {
        if numero % 10 == digito {
        println!("{}", numero);
        }
    }
}

fn main() {
    let mut digito = String::new();

    println!("Digite o digito final desejado:");
    io::stdin().read_line(&mut digito).unwrap();

    let digito: i32 = digito.trim().parse().unwrap();

    let mut limite_inferior = String::new();

    println!("Digite o limite inferior:");
    io::stdin().read_line(&mut limite_inferior).unwrap();

    let limite_inferior: i32 = limite_inferior.trim().parse().unwrap();

    let mut limite_superior = String::new();

    println!("Digite o limite superior:");
    io::stdin().read_line(&mut limite_superior).unwrap();

    let limite_superior: i32 = limite_superior.trim().parse().unwrap();

    imprimir_terminados_em(digito, limite_inferior, limite_superior);

}