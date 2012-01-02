
  Ti.UI.setBackgroundColor('#000');

  root.Window1 = new root.GenericWindow("Window1", "Window 1");

  root.FacebookConnection = new root.FacebookConnection;

  root.Window1.window.add(root.FacebookConnection.loginButton());

  root.Window1.window.open();
