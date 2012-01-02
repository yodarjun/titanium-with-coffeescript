class User
  constructor: (facebookResponse) ->
    attributes = JSON.parse(facebookResponse)
    @name = attributes["name"]

  welcome: () ->
    alert("welcome " + @name)
    return true

root.User = User
