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

    // delete tweets
    document.querySelectorAll('[aria-label="More"]').forEach(function (v, i, a) {
        v.click();
        document.querySelectorAll('span').forEach(function (v2, i2, a2) {
            if (v2.textContent === 'Delete') {
                v2.click();
                document.querySelectorAll('[data-testid="confirmationSheetConfirm"]').forEach(function (v3, i3, a3) {
                    v3.click();
                    deletedTweets++
                });
            } else {
                document.body.click();
            }
        });
    });

    // un retweet tweets
    document.querySelectorAll('[data-testid="unretweet"]').forEach(function (v3, i3, a3) {
        v3.click();
        document.querySelectorAll('[data-testid="unretweetConfirm"]').forEach(function (v5) {
            deletedTweets++
            v5.click();
        });
    });

    // scroll down to load more tweets
    window.scrollBy(0, 3000);
}
setInterval(delTweets, timeout); // run script multipile times
delTweets(); // run for the first time