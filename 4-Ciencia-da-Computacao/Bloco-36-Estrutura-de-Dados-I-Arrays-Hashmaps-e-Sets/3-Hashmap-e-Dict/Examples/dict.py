# Instanciando a classe Dict
from collections import ChainMap, Counter, defaultdict

employee_registry = {}

# Inserindo dados
# objeto[chave] = valor
employee_registry[14] = "name1"
employee_registry[23] = "name2"
employee_registry[10] = "name3"
employee_registry[9] = "name4"
print(employee_registry)

# Alterando o nome do id 10
# objeto[chave] = novo_valor
employee_registry[10] = "name30"
print(f"Novo valor do id 10, após a atualização: {employee_registry[10]}")

double = {i: i * 2 for i in range(3, 21)}

print(double)


group = ChainMap(
    {"nome": "Cássio", "idade": "30"},
    {"cargo": "Especialista"},
    {"nome": "João", "idade": "30"},
)

print(group["nome"])
print(group["cargo"])


default = defaultdict(list)
# como a chave team não existe ela é criada e uma lista vazia é atribuída,
# assim conseguimos adicionar chaves diretamente
default["team"].append("Cássio")
default["team"].append("Gleison")
default["team"].append("Marco")
print(default)


numbers = Counter([1, 3, 3, 3, 4, 4])
print(numbers)
# Counter({3: 3, 4: 2, 1: 1})
ingredients = Counter({"pão": 10, "bife": 20})
print(ingredients)
print(len(ingredients))
# número de ingredientes (2)
print(sum(ingredients.values()))
# número total de ingredientes no conjunto (30)
