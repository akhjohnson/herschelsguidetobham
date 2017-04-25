var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser");
var api = require('./api')
var routeMw = require("./middleware/routing.mw");
var configurePassport = require("./config/passport");
const express = require('express');
const simpleOauthModule = require('./../');




var app = express();

app.use(express.static(path.join(__dirname, "../client")));
app.use(bodyParser.json());
app.use(cookieParser());

configurePassport(app);

app.use('/api', api);


app.get("*", function(req, res, next) {
    if(routeMw.isAsset(req.url)) {
        next();
    } else {
        res.sendFile(path.join(__dirname, "../client/index.html"));
    }
});

const oauth2 = simpleOauthModule.create({
  client: {
    id: '<CLIENT_ID>',
    secret: '<CLIENT_SECRET>',
  },
  auth: {
    tokenHost: 'https://google.com',
    tokenPath: '/login/oauth/access_token',
    authorizePath: '/login/oauth/authorize',
  },
});

// Authorization uri definition
const authorizationUri = oauth2.authorizationCode.authorizeURL({
  redirect_uri: 'http://localhost:3000/callback',
  scope: 'notifications',
  state: '3(#0/!~',
});

// Initial page redirecting to Github
app.get('/auth', (req, res) => {
  console.log(authorizationUri);
  res.redirect(authorizationUri);
});

// Callback service parsing the authorization token and asking for the access token
app.get('/callback', (req, res) => {
  const code = req.query.code;
  const options = {
    code,
  };

  oauth2.authorizationCode.getToken(options, (error, result) => {
    if (error) {
      console.error('Access Token Error', error.message);
      return res.json('Authentication failed');
    }

    console.log('The resulting token: ', result);
    const token = oauth2.accessToken.create(result);

    return res
      .status(200)
      .json(token);
  });
});

app.get('/success', (req, res) => {
  res.send('');
});

app.get('/', (req, res) => {
  res.send('Hello<br><a href="/auth">Log in with Github</a>');
});

app.listen(process.env.PORT || 3000);