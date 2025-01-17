const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');
var path = require('path');

const options = {
    
    swaggerDefinition: {
        openapi: '3.0.3',
        info: {
            title: 'Test API',
            version: '1.0.0',
            description: 'Test API with express',
        },
        host: process.env.SERVER_URL,
        basePath: '/'
    },
    apis: ['./routes/*.js', './models/*']
}

const specs = swaggereJsdoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}



