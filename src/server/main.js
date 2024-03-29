// DEPENDENCIES
import express from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";
import portfoliosRouter from '../server/controllers/portfolios.js';

// CONFIGURATION
dotenv.config();
const app = express();
const PORT = process.env.PORT

// ROUTES
app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

app.use('/portfolios', portfoliosRouter);

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})

// LISTEN
ViteExpress.listen(app, PORT, () =>
  console.log('Server is listening on port', PORT, '...'),
);
