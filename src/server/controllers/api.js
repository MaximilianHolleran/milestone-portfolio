// // Import the required modules
import express from 'express';

import Review from '../models/review.js';
// Router
const router = express.Router();


// Routes
router.get('/projects', (req, res) => {
    res.send('PROJECTS DATA');
});

router.get('/contacts', (req, res) => {
    res.send('CONTACTS DATA');
});

router.get('/reviews', (req, res) => {
    res.send('REVIEWS DATA');
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
    res.send('404')
});


// Export the router
export default router;
