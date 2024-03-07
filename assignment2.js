// import express and fetch
const express = require('express');
const fetch = require('node-fetch');

// create an express app
const app = express();

// set the port
const port = 3000;

// create a route for the app
app.get('/api', (req, res) => {
    // send a JSON response
    res.json({ message: 'Hello from the API' });
});

// endpoints