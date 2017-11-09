import '../style/style.css'

var ViewModel = function() {
  var self = this;

  self.currentInput = ko.observable(0);

  self.menuItems = ko.observableArray([]);

  // TODO: Async way to add items to observable array after loading
  setTimeout(() => {self.menuItems(CASINO_LIST)}, 1000);
  setTimeout(() => {self.currentInput('pa')}, 2000);

  self.filterItems = ko.computed(() => {

    //TODO: Set different way to check for empty observable
    if (self.currentInput() == 0) {
      return self.menuItems();
    } else {
      var filter = this.currentInput().toLowerCase();

      return ko.utils.arrayFilter(self.menuItems(), (casino) => {
        return casino.toLowerCase().indexOf(filter) !== -1;
      })
    }
  })

  // for (let i = 0; i < CASINO_LIST.length; i++) {
  //   console.log('hello')
  //   self.menuItems.push(CASINO_LIST[i]);
  // };

  $('#search-button').click(() => {
    if (self.menuItems().length < 13) {
      self.menuItems.push('new item');
    } else {
      self.menuItems.pop();
    }
  });

};

ko.applyBindings(new ViewModel());
