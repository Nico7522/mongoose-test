const  mongoose  = require('mongoose')

const categorieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum: ['farm', 'potentiel', 'other']
    }
});

const Categorie = mongoose.model('Categorie', categorieSchema);

module.exports = Categorie