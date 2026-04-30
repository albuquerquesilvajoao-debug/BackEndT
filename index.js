const express = require('express')
const rotasProdutos = require('./routes/produtos');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/produtos', rotasProdutos);

app.get('/', (req, res) => {
    res.json({
        mensagem: 'API de estoque rodando',
        endpoints: {
            listarTodos: 'GET/produtos',
            buscarPorID: 'GET/produtos/:id',
            cadastrar: 'POST/produtos',
            atualizar: 'PUT/produtos/:id',
            remover: 'DELETE/produtos/:id'
        }
    });
});

app.listen(PORT, () => {
    console.log('Server rodando em https://localhost:${PORT}');
});
