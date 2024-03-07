1. Make sure you have node.js installed (latest version should be fine)
2. Make sure you have npm installed (this might come with node.js I don't remember but you should know if you have it 
if when you type 'npm help' in a terminal the command is unrecognized)
3. cd into the project folder 
4. type npm install
5. type node assignment2.js

Now the server is started with the following endpoints available:
Get all tweets: http://localhost:3000/tweets
Get a list of all external links: http://localhost:3000/links
Get tweet details: http://localhost:3000/tweet/:id

example: http://localhost:3000/tweet/1
retrieves the details for a tweet with an id == '1'

Get detailed profile
http://localhost:3000/user/:screen_name