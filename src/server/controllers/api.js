// // Import the required modules
import express from 'express';
import {createReview, getReview, getReviews, updateReview, deleteReview} from './reviewController.js'

// Router
const router = express.Router();


// Routes
router.get('/projects', (req, res) => {
    res.json('PROJECTS DATA');
});

router.get('/contacts', (req, res) => {
    res.json('CONTACTS DATA');
});

router.get('/reviews', getReviews);
router.post('/reviews', createReview);
router.get('/reviews/:id', getReview);
router.patch('/reviews/:id', updateReview);
router.delete('/reviews/:id', deleteReview);


router.get('*', (req, res) => {
    res.json('404')
});


// Export the router
export default router;
