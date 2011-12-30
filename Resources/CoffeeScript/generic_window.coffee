class GenericWindow
  constructor: (theTitle, theText) ->
    self    = this
    @window = Ti.UI.createWindow({title: theTitle, background: '#fff'})
    @custom = "Some random Value"
    label   = Ti.UI.createLabel({
      color: '#999',
      text:  theText,
      font:  {
        fontSize: 20,
        fontFamily: 'Helvetica Neue'
      },
      textAlign: 'center',
      width: 'auto'
    })
    @window.add(label)
    @window.addEventListener("click", () ->
      alert(self.custom)
    )

root.GenericWindow = GenericWindow
