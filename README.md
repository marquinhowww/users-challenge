# Desafio

1. Os websites de todos os usuários
2. O Nome, email e a empresa em que trabalha (em ordem alfabética).
3. Mostrar todos os usuários que no endereço contem a palavra ```suite```
4. Salvar logs de todas interações no elasticsearch
5. EXTRA: Criar test unitário para validar os itens a cima.

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
