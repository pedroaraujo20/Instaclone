const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

// cria o servidor
const app = express();

// divide servidor para que suporte http e websocket(tempo real)
const server = require('http').Server(app);
const io = require('socket.io')(server);

// conexao com o banco
mongoose.connect('mongodb+srv://admin:admin@cluster0-qvcak.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});

app.use((req, res, next) => {
  req.io = io;

  next();
});

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

// criando rota
app.use(require('./routes'));

// Ouvir a porta do navegador
server.listen(3333);




