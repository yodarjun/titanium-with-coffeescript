(function() {
  var GenericWindow;

  GenericWindow = (function() {

    function GenericWindow(theTitle, theText) {
      var label, self;
      self = this;
      this.window = Ti.UI.createWindow({
        title: theTitle,
        background: '#fff'
      });
      label = Ti.UI.createLabel({
        color: '#999',
        text: theText,
        font: {
          fontSize: 20,
          fontFamily: 'Helvetica Neue'
        },
        textAlign: 'center',
        width: 'auto'
      });
      this.window.add(label);
    }

    return GenericWindow;

  })();

  root.GenericWindow = GenericWindow;

}).call(this);
