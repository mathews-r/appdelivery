
# :beer: Drink Easy - Delivery App

Um app de delivery para suas bebidas.

Esse foi o projeto mais completo até agora! Nessa aplicação, meu grupo foi responsável por criar e integrar tanto o back-end quanto o front-end, criando uma plataforma de delivery de bebidas. 🍻

Neste projeto, meu grupo desenvolveu um app de delivery para uma distribuidora de bebidas. Veja abaixo o contexto da entrega que foi feita:

Acesso via login: tanto clientes como pessoas vendedoras, assim como o próprio dono da distribuidora, que administra o sistema, devem ter acesso ao aplicativo via login, porém para funções diferentes: (1) A pessoa cliente, que compra da lista de produtos; (2) A pessoa vendedora, que aprova, prepara e entrega; (3) A pessoa administradora, que gerencia quem usa o aplicativo;
Fazer a comunicação entre clientes e pessoas vendedoras: a pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". Ambos devem possuir detalhes sobre seus pedidos;
Se a pessoa cliente faz o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos após a atualização da página. A pessoa cliente, por sua vez, deve ter as informações sobre seu pedido quando sua página for atualizada, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega

Link da aplicação funcionando: https://wry-potato-production.up.railway.app/login

![image](https://user-images.githubusercontent.com/83560101/205159385-2ec0d63e-d131-470b-8a1f-9d316d9bf7cd.png)


## ⚙️ Funcionalidades

✅ Fazer login / cadastro;

✅ Criar uma venda - cliente;

✅ Alterar o status da venda - vendedor;

✅ Fazer gestão dos usuários do app - administrador;

## :hammer_and_wrench: Ferramentas 
### 🍮 BackEnd
- DOCKER;
- MySQL com Sequelize;
- NodeJS com Express;
- JWT;
- MD5;
- Testes (Sinon, Chai, Mocha);

### 🍮 FrontEnd
- React;
- Context API;
- Bootstrap;
- Testes (Jest);

# Orientações

- *Clonar o repositório:*

```
$ git clone git@github.com:mathews-r/appdelivery.git
```

- *Acessar o projeto appdelivery:*

```
$ cd appdelivery
```

<details>
  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker

  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `delivery_app`.
  - A partir daqui você pode rodar o container `delivery_app` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it delivery_app bash`.

  > Instale as dependências com `npm install`
  
  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

<img src="images/remote-container.png" width="800px" >  

---
  
  ## Sem Docker
  
  > Acesse as pastas back-end e front-end e instale as dependencias: `npm install`
 
  - Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
  - Acesse a aplicação pelo endereço: `http://localhost:3000` - FrontEnd;
  - `http://localhost:3001` - BackEnd;
  <br/>
</details>

- *Para acessar a aplicação:*
```
Utilizar um login válido ou cadastrar um:

email: zebirita@email.com
senha: $#zebirita#$
```

## 👨‍💻 Desenvolvedores

- [Mathews Rodrigues](https://www.linkedin.com/in/mathewsrodrigues/)
- [Bruna Eduarada](https://www.linkedin.com/in/bruna-eduarda-a06a1b18b/)
- [Marcell Pena](https://www.linkedin.com/in/marcellrochapena/)
- [Mateus Hoffman](https://www.linkedin.com/in/mateushoffman/)
- [Rodrigo Cuervo](https://www.linkedin.com/in/rodrigocvigil/)
