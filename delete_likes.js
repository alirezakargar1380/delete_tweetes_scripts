// start - app settings
//    check this setting before run this script

/**
 *  Timeout
 *      this timeout is in seconds, if you set this to 5,
 *      every 5 second, this script will run 
 * 
 *  NOTE:
 *      increase timeout if any suspend or rate limit happens
 */
var timeout = 5;

// end - app settings

// app variables
//      Don't change this
var deletedTweets = 0;
timeout = timeout * 1000

var delTweets = function () {
    // get all your tweets number
    var tweetsRemaining = document.querySelectorAll('[role="heading"]+div')[1].textContent;
    console.log('Remaining: ', tweetsRemaining + ', deleted:', deletedTweets);

    // un retweet tweets
    document.querySelectorAll('[data-testid="unlike"]').forEach(function (v3, i3, a3) {
        try {
            v3.click();
            deletedTweets++
        } catch (error) {
            console.error(error)
        }
    });

    // scroll down to load more tweets
    window.scrollBy(0, 10000);
}
setInterval(delTweets, timeout); // run script multipile times