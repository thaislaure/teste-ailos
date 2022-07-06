<h1 align="center" >
  Teste Ailos
</h1>

## <p id='tecnologies'>💻 Tecnologias </p>
Este projeto foi desenvolvido com as seguintes tecnologias:

-  [Angular v9.0.7](https://angular.io/)
-  [TypeScript v3.7.5](https://www.typescriptlang.org/)
-  [Node.js v12.11.1](https://nodejs.org/en/)


## <p id='como'>💻 Como usar </p>
Para clonar e executar este aplicativo, na linha de comando:

```bash
# Clone este repositório
$ git clone https://github.com/thaislaure/teste-ailos.git

Para execução do projeto siga os passos abaixo:

#### Passo 1.1 - Instalando as dependências

acesse a pasta raiz do seu projeto e execute o comando abaixo:

Instalando com npm:
```
npm install
```

### Passo 2 - Subindo o JSON Server

Utilizei o JSON Server serve para simular uma api fake.

Instalando com npm:

```
npm i json-server
```

Execute o comando abaixo na pasta raiz do seu projeto:

```
json-server --watch src/assets/data/db.json
```
Abra o *browser* e acesse a url:  http://localhost:3000/clientes para visualizar os dados.

### Passo 3 - Rode o seu projeto

Agora basta executar mais um comando para subir a aplicação e ver o seu projeto rodando no *browser* ;).

```
ng serve
```

Abra o *browser* e acesse a url http://localhost:4200. Pronto!


### Todo list:

Alguns pontos a ser desenvolvidos futuramente:

-componente de button

-componente d ecards

-responsibilidade: ficou alguns pontos que faltou ser responsivel

-time-line: faltou terminar o component, fiz apenas o html e css
