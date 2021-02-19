# Grab Reddit Data without the mess :rocket:
This package includes 5 simple functions you can use to view reddit data about your favorite user or subreddit.

## The Methods
Each method is an asynchronous function that takes only one argument being a string. This argument can either be a user from reddit or a subreddit name depending on the method you are using. It is important to note that there is one function that may not work due to the user having their setting set to private. This method is the `getRedditUserUpvotes` method.
Be sure to check with the user for them to update their settings to use this method.


# How to use:
Use `npm install npm-package-create-reddit-user-data` to add this package to your dependencies in your package.json file.

From there, you can use this by importing it like so:
```javascript
const reddit = require('npm-package-create-reddit-user-data');
```

Use the methods by simply putting a `.` after the const you created:
```javascript
reddit.
```
Your IDE may help you with selecting a method that best suits your needs.

## Every method is asynchronous and returns a promise!
Every method must have a parameter met with a string. An invalid/non-existent user or subreddit will result in a 404 error. You can use the data as you please but note that the method returns a promise which will have to be handled accordingly:
```javascript
reddit.getRedditSubredditAbout('memes')
    .then(data => console.log(data))
```

Example of a user method to grab their recent 25 comments:
```javascript
reddit.getRedditUserComments('someuser')
    .then(data => console.log(data))
```