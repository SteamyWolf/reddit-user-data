const fetch = require('node-fetch');

function getRedditUser() {
    fetch(`https://www.reddit.com/user/steamywolf.json`)
    .then(response => response.json())
    .then(data => console.log(data.data.children))
}
getRedditUser()
