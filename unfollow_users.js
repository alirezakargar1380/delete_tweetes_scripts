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
var timeout = 3;

// end - app settings

// app variables
//      Don't change this
timeout = timeout * 1000
let unfollowedUsers = 0

var unfollowUsersWhoDontFollowBackToYou = function () {
    document.querySelectorAll('[data-testid="UserCell"]').forEach(function (v, i, a) {
        let follows = false
        v.querySelectorAll('[data-testid="userFollowIndicator"]').forEach(function (v2) {
            follows = true
        })
        if (!follows) {
            v.querySelectorAll('div[data-testid$="-unfollow"]').forEach(function (btn) {
                try {
                    btn.click();
                } catch (error) {
                    console.error(error)
                }
            });

            document.querySelectorAll('div[data-testid="confirmationSheetConfirm"]').forEach(function (v3, i3, a3) {
                v3.click();
                unfollowedUsers++
            });

            console.log(unfollowedUsers + ' users are unfollow')
        }
    });

    // scroll down to load more users
    window.scrollBy(0, 10000);
}

setInterval(unfollowUsersWhoDontFollowBackToYou, timeout); // run script multipile times
unfollowUsersWhoDontFollowBackToYou(); // run for the first time