const mongoose = require('mongoose');
// optional shortcut variable
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: String,
  rating: {type: String, min: 1, max: 5, default: 5},
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
})

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
  cast: [{type: Schema.Types.ObjectId, ref: 'Performer'}],
  nowShowing: { type: Boolean, default: false },
  reviews: [reviewSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);