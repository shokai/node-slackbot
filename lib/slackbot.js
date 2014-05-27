(function() {
  var Slackbot, exports, request;

  request = require('request');

  exports = module.exports = Slackbot = (function() {
    function Slackbot(team, token) {
      this.team = team;
      this.token = token;
    }

    Slackbot.prototype.send = function(channel, msg, callback) {
      var url;
      if (callback == null) {
        callback = function() {};
      }
      url = "https://" + this.team + ".slack.com/services/hooks/slackbot?token=" + this.token + "&channel=" + (encodeURIComponent(channel));
      return request.post({
        url: url,
        body: msg
      }, callback);
    };

    return Slackbot;

  })();

}).call(this);
