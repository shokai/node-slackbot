Slackbot
========
Slackbot wrapper for [slack.com](https://slack.com)

- https://github.com/shokai/node-slackbot
- https://www.npmjs.org/package/slackbot


## Install

    % npm install slackbot

## Get Token

add slackbot integration and get `token`

- https://YOUR-TEAM.slack.com/services/new/slackbot


## Usage

```javascript
var Slackbot = require('slackbot')

var slackbot = new Slackbot('YOUR-TEAM', 'YOUR-TOKEN');

slackbot.send("#general", "hello!!", function(err, res, body) {
  if(err) return;
  console.log(body);
});
```


## Sample

use [sample.js](https://github.com/shokai/node-slackbot/blob/master/sample.js)

    % SLACK_TEAM=teamname SLACK_TOKEN=a1b2cdef345 node sample.js "hello world"


## Develop

    % npm install

    % npm test
    # or
    % npm run watch

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

