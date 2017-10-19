# How to deploy an Express/Node.js 'Hello World' website on Heroku

<p align="center">
  <img src="https://github.com/ijklim/deploy_express_nodejs_heroku/blob/master/express-nodejs-heroku.png" width="100%">
</p>

[Live Demo](https://i-express.herokuapp.com)


## Getting Started

These instructions will show you how to create an Express (a Node.js web application framework) 'Hello World' website from scratch, then deploy it on the Heroku server.


### Prerequisites

* Node.js - https://www.nodejs.org
* git - https://git-scm.com
* Free Heroku Account - https://www.heroku.com


### Step 1. Create an Express website

I use the name `i-express`, you can call it anything you want, except `express`. It cannot be the same name as the Express package.

``` bash
mkdir i-express
cd i-express

npm init
```

You will be asked a few questions after invoking `npm init`, the defaults can be used without any problem.

This will create a package.json file. You can treat this as a text file and modify the content if necessary.

### Step 2. Install express

``` bash
npm install express --save
``` 

### Step 3. Create Hello World site

Create a file called `server.js`

**server.js:**
``` js
var express = require('express');
var app = express();

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>');
});

var port = process.env.PORT || 3000;
app.listen(port);

console.log('server started ' + port);
```

### Step 4. Test Hello World

``` bash
node server
```

You should be able to bring up a Hello World page by visiting http://localhost:3000.

After successfully testing the site, you can stop the server by pressing `CTRL+C`.

### Step 5. Set up Heroku

1. Sign in to https://heroku.com
2. Select **New** > **Create new app** to create a new app
3. Enter an App name (e.g. in my case `i-express`)
4. Install the Heroku CLI

``` bash
npm install -g heroku-cli
```

5. Login to Heroku

``` bash
heroku login
```

**Note:** If the heroku command is throwing an error (e.g. incompatible Node version), other methods of installing Heroku CLI can be found [here](https://devcenter.heroku.com/articles/heroku-cli).

### Step 6. Set up git

Create a `.gitignore` file to prevent files in node_modules from being tracked and uploaded to Heroku.

**.gitignore:**
```
node_modules/
```

Initialize git and deploy to Heroku

``` bash
git init
heroku git:remote -a i-express
git add .
git commit -am "Create Hello World page"
git push heroku master
```

Voilà! Your new site is now live at https://\<AppName\>.herokuapp.com

## Author

* Ivan Lim - *Initial work* - [Active Improvement Web Studio](http://aiwebstudio.com)


## License

This project is licensed under the MIT License - see the LICENSE file for details