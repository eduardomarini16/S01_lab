// package main

// import "fmt"

// func somaValoresVendas(a, b, c int) int {
// 	return a + b + c
// }

// func main() {

// 	var a, b, c int

// 	fmt.Println("Digite as vendas do 1° trimestre: ")
// 	fmt.Scan(&a)
// 	fmt.Println("Digite as vendas do 2° trimestre: ")
// 	fmt.Scan(&b)
// 	fmt.Println("Digite as vendas do 3° trimestre: ")
// 	fmt.Scan(&c)

// 	soma_vendas := somaValoresVendas(a, b, c)

// 	if soma_vendas < 100 {
// 		fmt.Println("Meta mínima anual não atingida!")
// 	} else {
// 		fmt.Printf("Total de vendas: %d unidades\n", soma_vendas)
// 		switch {
// 		case soma_vendas >= 250:
// 			fmt.Println("Classificação: Categoria Top Seller")
// 		case soma_vendas >= 180 && soma_vendas < 250:
// 			fmt.Println("Classificação: Categoria Sênior")
// 		case soma_vendas >= 100 && soma_vendas < 180:
// 			fmt.Println("Classificação: Categoria Pleno")
// 		}
// 	}
// }
