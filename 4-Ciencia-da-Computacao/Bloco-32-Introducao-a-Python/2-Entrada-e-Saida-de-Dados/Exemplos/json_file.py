import json


with open("teste.json") as file:
    content = file.read()
    teste = json.loads(content)
    print(teste)


with open("teste.json", "w") as file:
    json_teste = json.dumps([{"teste": "teste"}, {"teste2": "teste2"}])
    file.write(json_teste)
