// import express and fetch
const express = require('express');
const fetch = require('fetch');
const fs = require('fs');

// import the data
const data = require('./favs.json');

// create an express app
const app = express();

// set the port
const port = 3000;

// start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// ENDPOINTS


// Get all tweets (create time, id, and tweet text) available in the archive.
app.get('/tweets', (req, res) => {
    // grab create time, id, and tweet text from each entry in the data
    let tweets = data.map(tweet => {
        return { created_at: tweet.created_at, id: tweet.id, text: tweet.text };
    });
    // Return all of the tweets
    res.json(tweets);
});

// Get a list of all external links (all links that appear in tweet text field. Use regular expressions to extract the links , the links should be grouped based on tweet ids.
app.get('/links', (req, res) => {
    let links = [];
    data.forEach(tweet => {
        let tweetLinks = tweet.text.match(/(https?:\/\/[^\s]+)/g);
        if (tweetLinks) {
            links.push({ id: tweet.id, links: tweetLinks });
        }
    });
    // Return the list of links
    res.json(links);
});

// Get the details (tweet created_at, text, user screen_name) about a given tweet (given the tweet’s id).
app.get('/tweet/:id', (req, res) => {
    // grab created_at, text, and user.screen_name from the tweet with the given id
    let tweet = data.find(tweet => String(tweet.id) === req.params.id);
    // grab created_at, text, and user.screen_name from the tweet
    tweet = { created_at: tweet.created_at, text: tweet.text, screen_name: tweet.user.screen_name };
    // Return the tweet details
    res.json(tweet);
});

// Get detailed profile (location, description, followers_count, friends_count) information about a given Twitter user (given the user’s screen name).
app.get('/user/:screen_name', (req, res) => {
    // loop through data[x].user.id to find the user
    let user = data.find(tweet => tweet.user.screen_name === req.params.screen_name);
    // Return the location, description, followers_count, and friends_count
    res.json({ location: user.user.location, description: user.user.description, followers_count: user.user.followers_count, friends_count: user.user.friends_count });
});