/**--------------------- READ THIS BEFORE RUN ----------------**/
/**
 *  Timeout:
 *      this timeout is in seconds, if you set this to 5,
 *      every 5 second, this script will run 
 * 
 *  NOTE:
 *      increase timeout if any suspend or rate limit happens
 */
var timeout = 5;


/**--------------------- DON'T Change This SECTION - START ----------------**/

// START - app variables
//   NOTE:
//      Don't change this
var deletedTweets = 0;
timeout = timeout * 1000

// END - app settings

/**--------------------- DON'T Change This SECTION - END ----------------**/

var delTweets = function () {
    // get all your tweets number
    var tweetsRemaining = document.querySelectorAll('[role="heading"]+div')[1].textContent;
    console.log('Remaining: ', tweetsRemaining + ', deleted:', deletedTweets);

    // delete tweets
    document.querySelectorAll('article[data-testid="tweet"]').forEach(function (tweetsArticle) {
        tweetsArticle.querySelectorAll('[aria-label="More"]').forEach(async function (v, i, a) {
            v.click();
            
            // IS TRUE
            await new Promise((resolve) => setTimeout(resolve, 500));
            document.querySelectorAll('[role="menuitem"]').forEach(async function (v2, i2, a2) {
                if (v2.textContent === 'Delete') {
                    v2.click();
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    document.querySelectorAll('[data-testid="confirmationSheetConfirm"]').forEach(function (v3, i3, a3) {
                        v3.click();
                        deletedTweets++
                    });
                }
            });
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