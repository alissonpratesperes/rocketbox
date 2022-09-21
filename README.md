___
<p align="center">
    <img src="github/rocketbox_logo.svg" width="50%"/>
</p>
    <br/>
<p align="center">
    <img alt="Course Event" src="https://img.shields.io/badge/omnistack-week%206-%237159C1"/>
    <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/alissonpratesperes/rocketbox?color=7159C1"/>
        <a href="https://github.com/alissonpratesperes/rocketbox/search?l=javascript"><img alt="Top Language" src="https://img.shields.io/github/languages/top/alissonpratesperes/rocketbox?color=7159C1"/></a>
    <img alt="GitHub Repository Size" src="https://img.shields.io/github/repo-size/alissonpratesperes/rocketbox?color=7159C1"/>
    <img alt="GitHub Code Size" src="https://img.shields.io/github/languages/code-size/alissonpratesperes/rocketbox?color=7159C1"/>
        <a href="https://github.com/alissonpratesperes/rocketbox/commits/main"><img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/alissonpratesperes/rocketbox?color=7159C1"/></a>
        <a href ="https://github.com/alissonpratesperes/rocketbox/blob/main/LICENSE"><img alt="GitHub License" src="https://img.shields.io/badge/license-MIT-7159C1"/></a>
</p>
    </br>
<p align="center">
    <a href="#dart-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#battery-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#electric_plug-execute">Execute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#fuelpump-autor">Autor</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#memo-licença">Licença</a>
</p>
    <br/>

## :dart: Sobre
A **RocketBox** é uma Aplicação inspirada no DropBox. Crie boxes e compartilhe arquivos diversos entre seu Computador e Smartphone em tempo real.

## :battery: Tecnologias
Essa Aplicação foi desenvolvida utilizando as seguintes tecnologias:

- <a href="https://insomnia.rest/">Insomnia</a>
- <a href="https://mongodb.com/">Mongo DB</a>
- <a href="https://nodejs.org/">NodeJS</a>
- <a href="https://socket.io/">Socket IO</a>
- <a href="https://reactjs.org/">ReactJS</a>
- <a href="https://axios-http.com/">Axios</a>
- <a href="https://expo.dev/">Expo IO</a>
- <a href="https://reactnative.dev/">React Native</a>

## :electric_plug: Execute

	- Clonar o Repositório;
	- Instalar as Dependências do Back-End com o Comando: npm install;
        |- "./backend/src/models/File.js:24" - Atualizar Endereço de IP de acesso aos arquivos pelo Express;
        |- "./backend/src/server.js:24" - Verificar URL de conexão com o MongoDB;
            >_ Inicializar o Back-End com o Comando: npm run dev;
    - Instalar as Dependências do Front-End com o Comando: npm install;
        |- "./frontend/src/pages/Box/index.js:30" - Atualizar o Endereço de conexão dos WebSockets;
        |- "./frontend/src/services/api.js:4" - Alterar o Endereço de Conexão do Front-End;
            >_ Inicializar o Front-End com o Comando: npm start;
    - Instalar as Dependências do Mobile com o Comando: npm install --force;
        |- "./mobile/node_modules/expo/AppEntry.js:3" - Alterar o diretório de inicialização do Expo para : "../../src/index";
        |- "./mobile/src/pages/Box/index.js:31" - Atualizar o Endereço de conexão dos WebSockets;
        |- "./mobile/src/services/api.js:4" - Alterar o Endereço de Conexão do Mobile;
            >_ Inicializar o Mobile com o Comando: expo start;

## :fuelpump: Autor

Projeto desenvolvido durante a **Semana OmniStack 6** da <a href="https://rocketseat.com.br/">Rocketseat</a>, ocorrida em **Abril de 2019**.

## :memo: Licença

Esse projeto está sob a **Licença MIT**. Veja o arquivo [LICENSE](https://github.com/alissonpratesperes/rocketbox/blob/main/LICENSE) para mais detalhes.

___

<h5 align="center">👨🏻‍💻&nbsp;com&nbsp;💜&nbsp;por&nbsp;<a href="https://github.com/alissonpratesperes">Alisson Prates Peres</a>&nbsp;✌🏻😗</h5>