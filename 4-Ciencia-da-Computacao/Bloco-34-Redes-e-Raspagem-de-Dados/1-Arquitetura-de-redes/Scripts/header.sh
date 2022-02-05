echo "1.3 Faça uma chamada qualquer, utilizando o cURL, passando um header na requisição."

curl --location --request POST 'http://127.0.0.1:8000' \
--header 'msg: Bora' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "teste"
}'
