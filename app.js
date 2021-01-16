// USER

// Instance the USer then create a object
const getUSer = new User()
// Instance the card user class and creat the object
const getUserCard = new CardUser()


// I have no idea what im doing
getUSer.searchUser()
    .then( (response) => {
        response.json()

        .then( (data) => {
            getUserCard.showUser(data)
        })
    })  


// USERSTATISTICS

// Instance the Statistics then creat a objetct
const getStatistics = new Statistics()
// Instance the statistics and create a object
const getStatisticsCard = new UserStatistics()

getStatistics.searchStatistics()
    .then( (response) => {
        response.json()

        .then( (data) => {
            getStatisticsCard.showStatistics(data)
        })
    })  


// FOLLOWERS

// Instance the Follower and create a object
const getFollower = new Follower()
// instance the card followe and create an object
const getFollowerCard = new CardFollowers()

getFollower.searchFollower()
    .then ( (response) => {
        response.json()

        .then( (data) => {
            getFollowerCard.showFollowers(data)
        })
    })

// TWEETS

// Instance the Tweets and create a object
const getTweet = new Tweet()
// Instance the card tweet and create a object
const getTweetCard = new CardTweets()

getTweet.searchTweet()
    .then ( (response) => {
        response.json()

        .then( (data) => {
            getTweetCard.showFollowers(data)
        })
    })