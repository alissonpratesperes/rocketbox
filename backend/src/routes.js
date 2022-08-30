const multer = require('multer');
const express= require('express');
const routes = express.Router();

const multerConfig = require('./config/multer');
const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

    routes.get('/boxes/:id', BoxController.show);
    routes.post('/boxes', BoxController.store);
    routes.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store);

        module.exports = routes;