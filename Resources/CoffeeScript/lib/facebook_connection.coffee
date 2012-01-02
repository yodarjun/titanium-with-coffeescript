class FacebookConnection
  constructor: () ->
    Ti.Facebook.appid = 'xxxxxxxxxxxxxxx'
    Ti.Facebook.permissions = ["publish_stream", "email", "user_about_me", "user_activities", "user_birthday", "user_interests", "user_likes"]

  addLoginEventListener: () ->
    Ti.Facebook.addEventListener('login', (event) ->
      if event.success
        Ti.Facebook.requestWithGraphPath("me", {}, "GET", (resp) ->
          if resp.success
            user = new root.User(resp.result)
            user.welcome()
            # root.Window1.window.remove(root.FacebookConnnection.loginButton())
        )
      else if event.error
        alert(event.error)
      else if event.cancelled
        alert("Cancelled")
      return true
    )
    return true

  loginButton: () ->
    this.addLoginEventListener()
    Ti.Facebook.createLoginButton({ top: 50, style: 'wide' })

root.FacebookConnection = FacebookConnection
