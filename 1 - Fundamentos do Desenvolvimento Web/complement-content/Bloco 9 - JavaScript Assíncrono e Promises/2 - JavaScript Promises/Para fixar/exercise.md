1. O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?

   No modo síncrono as operações são executadas uma por vez, impedindo o fluxo caso uma operação demore ou não funcione. Quandos o código é executado de forma assíncrona, a próxima operação não precisa que a anterio termine para que ela seja executada.

2. Quando você tem que enfileirar várias *callbacks* , que problema surge?

   O código se torna caótico, gerando um callback hell.

3. Por que as *Promises* são uma forma de se resolver esse problema?

   Pois suas funcionalidades permitem que o código se torne mais limpo.

4. Quando você vai se comunicar com uma *API* , tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.

   Assíncrono

5. Dada a resposta anterior, o que é `fetch` e para que ele serve?

   Fech é uma função de comunicação com a API que permite que essa comunicação seja feita de forma assíncrona.