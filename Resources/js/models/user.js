(function() {
  var User;

  User = (function() {

    function User(facebookResponse) {
      var attributes;
      attributes = JSON.parse(facebookResponse);
      this.name = attributes["name"];
    }

    User.prototype.welcome = function() {
      alert("Welcome to Crowdtap Challenges " + this.name);
      return true;
    };

    return User;

  })();

  root.User = User;

}).call(this);
