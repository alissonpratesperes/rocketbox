const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
const options = {cors: true, origin: ['*:*']};
const io = require('socket.io')(server, options);

    io.on('connection', socket => {
        socket.on('connectRoom', box => {
            socket.join(box);
        });
    });

        mongoose.connect('mongodb+srv://omnistack_dev:KcAtSiNm0O@mavericks.pwlbv.mongodb.net/omnistack6?retryWrites=true', {
            useNewUrlParser: true
        });

            app.use(
                cors()
            );
            app.use(
                (request, response, next) => {
                    request.io = io;
                        return next();
                }
            );
            app.use(
                express.json()
            );
            app.use(
                express.urlencoded({
                    extended: true
                })
            );
            app.use(
                '/files',
                express.static(path.resolve(__dirname, '..', 'temp'))
            );
            app.use(
                require('./routes')
            );

                server.listen(3333);