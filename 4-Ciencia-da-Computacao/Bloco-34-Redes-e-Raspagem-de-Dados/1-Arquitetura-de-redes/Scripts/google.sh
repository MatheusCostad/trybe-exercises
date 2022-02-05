echo "2.1 Faça uma chamada GET, utilizando o cURL, para google.com."
curl --request GET 'google.com'

echo "2.2 Perceba que foi retornado um 301 . Isso quer dizer que existem diversos redirecionamentos que nos encaminham para o lugar certo. No caso, o caminho certo para a página do google é www.google.com . Ao acessarmos pelo navegador, não percebemos isso porquê ele faz o redirecionamento para a página certa para nós ao encontrar o 301 , porém, se você inspecionar a network você irá identificar esse redirecionamento. Faça uma nova chamada a "google.com", porém agora utilizando o parâmetro -L ou --location , que serve para "seguir redirecionamentos"."
curl -L -R GET 'google.com'
