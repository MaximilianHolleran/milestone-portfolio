// DEPENDENCIES
import express from "express";
import ViteExpress from "vite-express";
import dotenv from "dotenv";
import apisRouter from './controllers/api.js';
import mongoose from 'mongoose'

// CONFIGURATION
dotenv.config();
const app = express();
const PORT = process.env.PORT
mongoose.connect(process.env.MONGO_URI);
console.log('connected to mongo: ', process.env.MONGO_URI)

// Middleware to parse JSON requests
app.use(express.json());

// Define routes
app.post('/data', (req, res) => {
  // Access JSON data from the request body
  console.log('Received JSON data:', req.body);
  res.send('Received JSON data');
});

// ROUTES
app.use('/api', apisRouter)

// LISTEN
ViteExpress.listen(app, PORT, () =>
  console.log('Server is listening on port', PORT, '...'),
);