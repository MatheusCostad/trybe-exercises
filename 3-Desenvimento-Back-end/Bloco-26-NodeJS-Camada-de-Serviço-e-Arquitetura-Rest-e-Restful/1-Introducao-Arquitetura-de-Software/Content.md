# Arquitetura de Software

Arquitetura é um conhecimento compartilhado por desenvolvedores experientes sobre como organizar um sistema de software.

Existem diversas arquiteturas para os mais diferentes problemas, mas o que elas tem em comum é a **divisão de responsabilidades por camadas** .

## Regras de negócio

Em sistemas de software, as regras de negócio se traduzem em códigos que controlam o comportamento das aplicações. Um exemplo de modelo é o MSC.

### MSC

Cada letra representa uma camada que se comporta da seguinte forma:

- **Camada de Modelo (M):** Arquivos onde iremos executar as operações do banco de dados, como criar conexões e executar queries.
- **Camada de Serviço (S):** Arquivos onde iremos estruturar nossas regras de negócio, geralmente é quem chama os métodos definidos na camada de modelo.
- **Camada de Controladores (C):** Interface mais próxima da pessoa usuária ou de uma requisição, vai processar e chamar as devidas funções da camada de serviço.

![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/architecture/images/arquitetura_msc-680a782c342da34afeaa4b1ebafd58f3.png)

Dividir sua aplicação em camadas facilita muito a manutenção, a adição de novas funcionalidades e a organização geral do seu código, pois você sabe exatamente onde cada coisa deve ficar.