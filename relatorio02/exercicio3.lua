print ("Exercicio 3")

function filtrarMaiores(tabela, limite)
    local novaTabela = {}
        for i = 1, #tabela do
            if tabela[i] > limite then
            novaTabela[#novaTabela + 1] = tabela[i]
        end
    end
    return novaTabela
end

print("Digite a quantidade de elementos da tabela: ")
local n1 = tonumber(io.read())

local tabela = {}

for i = 1, n1 do
    print("Digite o elemento " .. i .. ":")
    tabela[i] = tonumber(io.read())
end

print("Digite o limite: ")
local k = tonumber(io.read())

local maioresK = filtrarMaiores(tabela,k)
print("Elementos maiores que " .. k .. ":")

for i = 1, #maioresK do
    print(maioresK[i])
end



