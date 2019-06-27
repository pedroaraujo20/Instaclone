const multer = require('multer');
const path = require('path');

// fazendo configuração para salvar fotos dentro da pasta uploads

module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, cb) {
            cb(null, file.originalname);
        }
    })
};