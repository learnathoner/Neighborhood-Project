import '../style/style.css'

var ViewModel = function() {
  var self = this;

  self.menuItems = ko.observableArray([]);

  console.log(CASINO_LIST.length)

  for (let i = 0; i < CASINO_LIST.length; i++) {
    console.log('hello')
    self.menuItems.push(CASINO_LIST[i]);
  };

  $('#search-button').click(() => {
    if (self.menuItems().length < 13) {
      self.menuItems.push('new item');
    } else {
      self.menuItems.pop();
    }
  });

};

ko.applyBindings(new ViewModel());
