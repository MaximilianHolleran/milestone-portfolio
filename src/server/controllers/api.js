// // Import the required modules
import express from 'express';

import Review from '../models/review.js';
// Router
const router = express.Router();


// Routes
router.get('/projects', (req, res) => {
    res.json('PROJECTS DATA');
});

router.get('/contacts', (req, res) => {
    res.json('CONTACTS DATA');
});

router.get('/reviews', (req, res) => {
    res.json('REVIEWS DATA');
});

router.post('/reviews', async (req, res) => {
    const { author, stars, email, content } = req.body;
        try {
        const newReview = await Review.create({ author, stars, email, content });
        res.status(201).json(newReview);
            } catch (error) {
        res.status(400).json({ error: error.message });
        }
    });

router.get('*', (req, res) => {
    res.json('404')
});


// Export the router
export default router;
