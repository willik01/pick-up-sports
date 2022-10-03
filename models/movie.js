const mongoose = require('mongoose');
// optional shortcut variable
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  releaseYear: {
    type: Number,
    default: function() {
      return new Date().getFullYear();
    },
    min: 1927
  },
  mpaaRating: {
    type: String,
    enum: ['G', 'PG', 'PG-13', 'R']
  },
  cast: [String],
  nowShowing: Boolean
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);