import mongoose from 'mongoose';
const { Schema } = mongoose;

const reviewSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    comments: { type: String, require: true },
    starRating: { type: Number, required: true },
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

export default Review;