(function() {

  'use strict';

  // knockout test

  // set state
  function DefaultViewModel(da) {
    var self = this;

    self.da = da;

    self.agencyName = ko.observable('');
    self.addManifestUrl = ko.observable('');
    self.newAgencyName = ko.observable('');
    self.newAgencyId = ko.observable('');

    // add functions
    self.agencyIsSet = ko.computed({
      read: function() {
        return typeof self.agencyName() !== 'undefined' && self.agencyName() !== null && self.agencyName().length !== 0;
      }
    });

    self.editManifestsTitle = ko.computed({
      read: function() {
        var title = 'Edit Manifests';

        if (self.agencyIsSet()) {
          title = title + ' - ' + self.agencyName;
        }

        return title;
      }
    });

    self.saveNewAgency = function() {

      // TODO: save new agencyName
      console.log(ko.toJSON(self));

    };

    self.isValid = ko.computed(function() {
      var rv = self.newAgencyName().length !== 0;
      rv = rv && self.newAgencyId().length !== 0;

      console.log('isValid is ' + rv);

      return rv;
    });

    self.loadDataAndBind = function() {
      self.da.loadAgencyInfo(self.success, self.fail);
    };

    self.success = function() {
      self.agencyName(self.da.getAgencyName());
      self.addManifestUrl(encodeURI(self.da.getSiteUrl() + '/Pages/AddManifestItems.aspx'));

      ko.applyBindings(self);
    };

    self.fail = function() { };
  }

  // MAIN body of execution
  var vmDataAccess = new DefaultDataAccess();

  var vm = new DefaultViewModel(vmDataAccess);

  // load page data
  vm.loadDataAndBind();

})();