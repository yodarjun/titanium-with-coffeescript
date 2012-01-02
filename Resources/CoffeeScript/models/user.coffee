class User
  constructor: (facebookResponse) ->
    attributes = JSON.parse(facebookResponse)
    @name = attributes["name"]

  welcome: () ->
    alert("Welcome to Crowdtap Challenges " + @name)
    return true

root.User = User
