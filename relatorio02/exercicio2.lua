print ("Exercicio 2")

function contarOcorrencias(tabela,alvo)
    local cont = 0
        for i = 1, #tabela do
            if tabela[i] == alvo then
            cont = cont + 1
        end
    end
    return cont
end

print("Digite a quantidade de elementos da tabela: ")
local n1 = tonumber(io.read())

local tabela = {}

for i = 1, n1 do
    print("Digite o elemento " .. i .. ":")
    tabela[i] = tonumber(io.read())
end

print("Digite o numero a ser buscado: ")
local n2 = tonumber(io.read())

local quant = contarOcorrencias(tabela,n2)
print("O numero " .. n2 .. " aparece " .. quant .. " vezes na tabela.")



