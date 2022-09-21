const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title: {
        type: String,
            required: true
    },
        path: {
            type: String,
                required: true
        }
}, {
    timestamps: true,
        toObject: {
            virtuals: true
        },
            toJSON: {
                virtuals: true
            }
});

    File.virtual('url').get(
        function() {
            return `http://192.168.1.101:3333/files/${encodeURIComponent(this.path)}`
        }
    );

        module.exports = mongoose.model('File', File);