print ("Exercicio 1")

function gerarTabelasPotenciais(inicio, fim, base)
    for expoente = inicio, fim do
        local op = base ^ expoente
        print(base .. " ^ " .. expoente .. " = " .. op)
    end
end

print("Digite o expoente inicial: ")
local M = tonumber(io.read())
print("Digite o expoente final: ")
local N = tonumber(io.read())
print("Digite a base: ")
local B = tonumber(io.read())

if M <= N then
    gerarTabelasPotenciais(M,N,B)
else 
    print("Erro, expoente inicial deve ser menor ou igual a expoente final.")
end

