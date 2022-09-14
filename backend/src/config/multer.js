const path = require('path');
const multer = require('multer');
const crypto = require('crypto');

    module.exports = {
        destination: path.resolve(__dirname, '..', '..', 'temp'),
            storage: multer.diskStorage({
                destination: (request, file, callback) => {
                    callback(
                        null,
                            path.resolve(__dirname, '..', '..', 'temp')
                    )
                },
                    filename: (request, file, callback) => {
                        crypto.randomBytes(
                            16,
                                (error, hash) => {
                                    if(error) {
                                        callback(error);
                                    }
                                        file.key = `${hash.toString('hex')}-${file.originalname}`;
                                            callback(
                                                null,
                                                    file.key
                                            );
                                }
                        )
                    }
            })
    };