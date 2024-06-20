const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css"
const express = require('express');
const mongoose = require('mongoose');
const server = express();
const bodyParser = require('body-parser');
const swagger = require('swagger-ui-express');
const swaggerJs = require('swagger-jsdoc');

server.use(
    bodyParser.json()
)
server.use(
    express.urlencoded({
        extended:true,
    })
)
const user = 'Paulo';
const password = encodeURIComponent(`pikmin123`)
mongoose.connect(`mongodb+srv://${user}:${password}@trabalho.a4r7uh4.mongodb.net/?retryWrites=true&w=majority&appName=Trabalho`)
.then(()=>{
    console.log('Conectado ao servidor YIPPE');
})
.catch(()=>{
    console.log('Erro ao conectar ao servidor no yippe....');
    console.log(err);
})

const options={
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Trabalho',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'https://trabalho-marcio-6me3d4x3k-pauloeduardomartins-projects.vercel.app/api-docs',
            },
        ],
    },
    apis: ['./Rotas/produtoRotas.js'],
}

const specs = swaggerJs(options);
const Rotas = require('./Rotas/produtoRotas');
server.use('/api-docs', Rotas, swagger.serve, swagger.setup(specs, {customCss:
    '.swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
customCssUrl: CSS_URL,}));
server.use('/api', Rotas);



//PORTA
server.use(express.json());
server.listen(3000)