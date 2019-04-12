(function() {

  'use strict';

  // function initializePage() {

    // knockout test

    // set state
    function DefaultViewModel(da) {
      var self = this;

      self.da = da;

      self.agency = ko.observable(self.da.getAgencyName());
      self.addManifestUrl = ko.observable(encodeURI(self.da.getSiteUrl() + '/Pages/AddManifestItems.aspx'));
      self.newAgencyName = ko.observable('');
      self.poId = ko.observable('');
      self.agencyAddr1 = ko.observable('');
      self.agencyAddr2 = ko.observable('');
      self.agencyAddr3 = ko.observable('');
      self.scanFacName = ko.observable('');
      self.scanFacAddr1 = ko.observable('');
      self.scanFacAddr2 = ko.observable('');
      self.scanFacAddr3 = ko.observable('');

      // add functions
      self.agencyIsSet = ko.computed({
        read: function() {
          return typeof self.agency() !== 'undefined' && self.agency() !== null && self.agency().length !== 0;
        },
        deferEvaluation: true
      });

      self.editManifestsTitle = ko.computed({
        read: function() {
          var title = 'Edit Manifests';

          if (self.agencyIsSet()) {
            title = title + ' - ' + self.agency;
          }

          return title;
        },
        deferEvaluation: true
      });

      self.saveNewAgency = function() {

        // TODO: save agency
        console.log(ko.toJSON(self));

      };

      self.isValid = ko.computed({
        read: function() {
          var rv = self.newAgencyName().length !== 0;
          rv = rv && self.poId().length !== 0;

          console.log('isValid is ' + rv);

          return rv;
         }/* ,
         deferEvaluation: true, */

      }).extend({ notify: 'always'});

      self.loadDataAndBind = function(){
        self.da.loadAgencyInfo(self.success, self.fail);
      };

      self.success = function() {
        ko.applyBindings(self);
      };

      self.fail = function() { };
    }

    var vmDataAccess = new DefaultVmSharePointAccess();

    var vm = new DefaultViewModel(vmDataAccess);
    // MAIN body of execution

    // load page data
    vm.loadDataAndBind();
  // }

  // initializePage();

})();