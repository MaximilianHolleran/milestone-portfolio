// DEPENDENCIES
import express from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";

// CONFIGURATION
dotenv.config()
const app = express();
const PORT = process.env.PORT

// MIDDLEWARE
// Express Settings
// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())
// app.use(express.static('public'))

// Controllers & Routes
//app.use(express.urlencoded({ extended: true }))
//app.use('/pages', require('../controllers/pages'))

// ROUTES
app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})

// LISTEN
ViteExpress.listen(app, PORT, () =>
  console.log('Server is listening on port', PORT, '...'),
);
