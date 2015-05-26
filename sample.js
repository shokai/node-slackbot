var Slackbot = require(__dirname);
// var Slackbot = require('slackbot')

var slackbot = new Slackbot(process.env.SLACK_TEAM, process.env.SLACK_TOKEN);

var msg = process.argv[2] || "hello!!";

slackbot.send("#general", msg, function(err, res, body) {
  if(err){
    console.error(err);
    return;
  }
  console.log(body);
});
