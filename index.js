const fetch = require('node-fetch');

async function getRedditUserAbout(username) {
    if (typeof username === 'string') {
        let retrieved;
        await fetch(`https://www.reddit.com/user/${username}/about.json`)
        .then(response => response.json())
        .then(data => retrieved = data)
        .catch(err => console.log(err))
        return retrieved
    } else {
        return 'You must type in a username as a string'
    }
}



async function getRedditUserComments(username) {
    if (typeof username === 'string') {
        let retrieved;
        await fetch(`https://www.reddit.com/user/${username}.json`)
        .then(response => response.json())
        .then(data => retrieved = data.data.children.map(obj => obj.data))
        .catch(err => console.log(err))
        return retrieved
    } else {
        return 'You must type in a username as a string'
    }
}



async function getRedditSubredditAbout(subreddit) {
    if (typeof subreddit === 'string') {
        let retrieved;
        await fetch(`https://www.reddit.com/r/${subreddit}/about.json`)
        .then(response => response.json())
        .then(data => retrieved = data)
        .catch(err => console.log(err))
        return retrieved
    } else {
        return 'You must type in a subreddit as a string'
    }
}

async function getRedditUserPosts(username) {
    if (typeof username === 'string') {
        let retrieved;
        await fetch(`https://www.reddit.com/user/${username}/submitted.json`)
        .then(response => response.json())
        .then(data => retrieved = data.data.children.map(obj => obj.data))
        .catch(err => console.log(err))
        return retrieved
    } else {
        return 'You must type in a username as a string'
    }
}



async function getRedditUserUpvotes(username) {
    if (typeof username === 'string') {
        let retrieved;
        await fetch(`https://www.reddit.com/user/${username}/upvoted.json`)
        .then(response => response.json())
        .then(data => retrieved = data)
        .catch(err => console.log(err))
        if ('error' in retrieved) {
            return console.log('Either this user doesn\'t exist or they have made their upvotes private')
        }
        return retrieved
    } else {
        return 'You must type in a username as a string'
    }
}

module.exports = {
    getRedditUserAbout: getRedditUserAbout,
    getRedditUserComments: getRedditUserComments,
    getRedditSubredditAbout: getRedditSubredditAbout,
    getRedditUserPosts: getRedditUserPosts,
    getRedditUserUpvotes: getRedditUserUpvotes
}
