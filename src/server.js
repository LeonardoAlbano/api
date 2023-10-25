// Para Importar o Framework Express
//pegando a pasta e colocando aqui dentro
const express = require("express");

// Preciso inicializar o Express
// Definir a porta de express, qual endereço que ele vai atender  
const app = express();

//Metodo GET para fazer leitura
// a barra ( / ) seria nossa raiz da api
// Criar uma função arrow function 
// fazendo a request e response 
// .send (ENVIAR MENSAGEM PARA QUEM SOLICITOU)
app.get("/", (request, response) => {
    response.send("Hello, meu maconheiro favorito");
})

// Porta
// Extrutura, a porta no terminal 
const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));