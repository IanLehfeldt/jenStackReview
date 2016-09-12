JEN stack review
================

In class for Pi 9-12-2016

Technologies
------------
* JQuery
* Express
* Node

Steps
=====

Set up Project
--------------
* npm init
* npm install express body-parser --save
* server/app.js
* updated package.json to have "start" command

Spin up a server
----------------
in app.js
* require express
* create an app that uses express
* set up port
* set up app.listen

Serve HTML file
---------------
* set up base url get route
* test in browser
* try basic response (res.send)
* restart server and refresh page
* create 'public' folder
* create index.html in this new folder
* in app.js require path
* update the res.send to res.sendFile for resolved path to HTML
* restart server and refresh page


Send server request (object)
----------------------------
* add script for our functionality (public/scripts)
* src in JQuery (public/vendors)
* src in our script
* add app.use for static 'public' folder
* restart server and refresh page
* add button to index.html
* add an on click handler in our js file
* setup post path on server to handle request (logs out req.body)
* ajax call on client side to POST to this path (sends an object)
* requried body-parser in app.js
* added an urlencodedParser
* injected said urlencodedParser into our post route
* restart server and refresh page, click button, observe magic

Server do some logic or something
---------------------------------
here we'll just count how many morts have been sent
* declare a global variable in app.js (countMorts)
* increment the variable when a POST call to /mort is received
* log out morts
* restart server and refresh page, click button, observe morts in terminal (server side only)

Receive response from server (object)
-------------------------------------
* assemble an object to send back to client in POST route
* use a res.send in the POST route to return said object
* handle the object as you see fit on the client (logged out in example)
* restart server and refresh page, click button, observe morts in client console
