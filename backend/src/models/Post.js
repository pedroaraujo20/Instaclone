const mongoose = require('mongoose');

// Represtação da "Tabela" no banco de dados
const PostSchema = new mongoose.Schema({
  author: String,
  place: String,
  description: String,
  hashtags: String,
  image: String,
  likes: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Post', PostSchema);
