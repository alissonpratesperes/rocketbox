const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

    mongoose.connect('mongodb+srv://omnistack_dev:KcAtSiNm0O@mavericks.pwlbv.mongodb.net/omnistack6?retryWrites=true', {
        useNewUrlParser: true
    });

        app.use(express.json());
        app.use(express.urlencoded({
            extended: true
        }));
        app.use('/files', express.static(path.resolve(__dirname, '..', 'temp')));
        app.use(require('./routes'));
        app.listen(3333);