// The Model
var data = {
  "Id": 1001,
  "SalePrice": 1649.01,
  "ListPrice": 2199.00,
  "ShortDesc": "Taylor 314CE",
  "Description": "Taylor 314-CE Left-Handed Grand Auditorium Acoustic-Electric Guitar"
};

// The ViewModel - using a literal
var viewmodel = {
  id: ko.observable(data.Id),
  salePrice: ko.observable(data.SalePrice),
  listPrice: ko.observable(data.ListPrice),
  shortDesc: ko.observable(data.ShortDesc),
  description: ko.observable(data.Description),
  formatCurrency: function(value) {
      return "$" + value().toFixed(2);
  }
};

// The ViewModel - using a function
var viewmodelClass = function() {
  this.id = ko.observable(data.Id);
  this.salePrice = ko.observable(data.SalePrice);
  this.listPrice = ko.observable(data.ListPrice);
  this.shortDesc = ko.observable(data.ShortDesc);
  this.description = ko.observable(data.Description);
  this.formatCurrency = function(value) {
    return "$" + value().toFixed(2);
  };
};

// Bind the ViewModel to the View using Knockout
//ko.applyBindings(viewmodel);

// or
ko.applyBindings(new viewmodelClass());