import mongoose from 'mongoose'
const { Schema } = mongoose

const reviewSchema = new Schema({
    author: { type: String, default: 'Anonymous' },
    stars: { type: Number, required: true },
    email: { type: String, required: true},
    content: { type: String, default: '' }
})

const Review = mongoose.model('Review', reviewSchema)
export default Review