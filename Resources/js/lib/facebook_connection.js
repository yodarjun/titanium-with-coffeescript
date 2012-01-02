(function() {
  var FacebookConnection;

  FacebookConnection = (function() {

    function FacebookConnection() {
      Ti.Facebook.appid = 'xxxxxxxxxxxxxxx';
      Ti.Facebook.permissions = ["publish_stream", "email", "user_about_me", "user_activities", "user_birthday", "user_interests", "user_likes"];
    }

    FacebookConnection.prototype.addLoginEventListener = function() {
      Ti.Facebook.addEventListener('login', function(event) {
        if (event.success) {
          Ti.Facebook.requestWithGraphPath("me", {}, "GET", function(resp) {
            var user;
            if (resp.success) {
              user = new root.User(resp.result);
              return user.welcome();
            }
          });
        } else if (event.error) {
          alert(event.error);
        } else if (event.cancelled) {
          alert("Cancelled");
        }
        return true;
      });
      return true;
    };

    FacebookConnection.prototype.loginButton = function() {
      this.addLoginEventListener();
      return Ti.Facebook.createLoginButton({
        top: 50,
        style: 'wide'
      });
    };

    return FacebookConnection;

  })();

  root.FacebookConnection = FacebookConnection;

}).call(this);
