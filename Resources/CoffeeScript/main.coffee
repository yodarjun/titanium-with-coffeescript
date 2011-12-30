Ti.UI.setBackgroundColor('#000')

root.Window1 = new root.GenericWindow("Window1", "Window 1")

facebookConnection = new root.FacebookConnection

root.Window1.window.add(facebookConnection.loginButton())

root.Window1.window.open()
