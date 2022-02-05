echo "1.2 Faça uma chamada POST, utilizando o cURL, passando um JSON no body da requisição."

curl --location --request POST 'http://127.0.0.1:8000' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "teste"
}'
