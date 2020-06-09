
# Desafio

> Sua tarefa é fazer um aplicativo que carregue a saida da URL https://jsonplaceholder.typicode.com/users, que retorna uma lista de usuário em JSON.

> Faça um programa que carregue a saída dessa URL e mostre os seguintes dados:

1. Os websites de todos os usuários
2. O Nome, email e a empresa em que trabalha (em ordem alfabética).
3. Mostrar todos os usuários que no endereço contem a palavra ```suite```
4. Salvar logs de todas interações no elasticsearch
5. EXTRA: Criar test unitário para validar os itens a cima.

Nos utilizamos as linguagens NodeJS e Scala, então vocẽ pode escolher uma destas para criar o programa.

Publique o código no Bitbucket e nos envie o link do mesmo.

> Sua configuração deve ser capaz de ser executado como abaixo:

1. Implantar uma máquina virtual. Para não gerar custos para você e para nós, use o `vagrant` com VirtualBox para provisionar sua instância.
2. Entregar o aplicativo usando o Docker e garantir que ele "sobreviva" nas reinicializações

# Solução

# User routes:

GET `/user`  
2. O Nome, email e a empresa em que trabalha (em ordem alfabética)

GET `/user/websites`  
1. Os websites de todos os usuários

GET `/user/address`  
3. Mostrar todos os usuários que no endereço contem a palavra ```suite```

# Running:
`docker-composer up`

Open http://localhost:3000

# Docs:
http://docs-marcos-mutant.now.sh
