# postman-task

**Youtube serch app.**
Lets you search for video using Youtube Data API v3.

Video Result can be sorted based on name or publish date in ascending or descending order.

Maximum result items in a search can be set to 5, 10, 25, 50.

Used AngularJS(1.x) for client-side app.

App is run on node.js server to prevent 403 and CORS error.

Note that the app wont properly function if you open index.html directly into browser. (403 and CORS error will show up in console).

To run the app follow the procedure below. ( Or you can just go to this link -> [Heroku Demo DY](https://dy-postman-task.herokuapp.com/) )

- Clone this repo.( git clone)

- Install node.js on your computer.( [How to install node??](https://nodesource.com/blog/installing-nodejs-tutorial-windows/))

- Open terminal and cd to the directory where you cloned the repo.

- Run the command `node index.js` in terminal.

- Open web browser and in address bar type `localhost:8080`

- App is now running.

The code for api calls is available in ./public/src/model/ApiHandler/youtubeService.js

This Service is used by the code in ./public/src/controller/search.main.controller.js

App is made according to the requirements specified along with few assumptions.