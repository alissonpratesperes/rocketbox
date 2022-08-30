const Box = require('../models/Box');

    class BoxController {
        async store(request, response) {
            const box = await Box.create(
                request.body
            );
                return response.json(box);
        }
    }

        module.exports = new BoxController();