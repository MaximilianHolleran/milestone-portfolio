// Router
const router = require('express').Router()

// Routes
router.get('/', (req, res) => {
    res.send('HOME PAGE')
})

router.get('/projects', (req, res) => {
    res.send('PROJECTS PAGE')
})

router.get('/contacts', (req, res) => {
    res.send('CONTACTS PAGE')
})

router.get('/reviews', (req, res) => {
    res.send('REVIEW PAGE')
})

module.exports = router
