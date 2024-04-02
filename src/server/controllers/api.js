// // Import the required modules
import express from 'express';

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

router.get('*', (req, res) => {
    res.send('404')
});

// Export the router
export default router;
