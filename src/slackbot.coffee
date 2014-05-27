request = require 'request'

exports = module.exports = class Slackbot
  constructor: (@team, @token) ->

  send: (channel, msg, callback = ->) ->
    url = "https://#{@team}.slack.com/services/hooks/slackbot?token=#{@token}&channel=#{encodeURIComponent channel}"
    request.post {url:url, body:msg}, callback
