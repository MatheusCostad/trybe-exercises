const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [olá, func] = saudacoes;

func(olá)

// Produza o mesmo resultado acima, porém utilizando array destructuring