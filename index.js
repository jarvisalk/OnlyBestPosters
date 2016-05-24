// Import the page-mod API
var pageMod = require("sdk/page-mod");
 
// Create a page-mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
  include: "*.4chan.org",
  contentScriptFile: "./modifypost.js"
});

//Main Functions
//First check the website, ensure that it is of subdomain http://boards.4chan.org/pol/thread/
//



//Extension
//Add checklist with picture of flag next to it.
//Remove anyone who replies - Get post number of flags that are not allowed.
