function DefaultDataAccess() {
  var self = this;

  self.agencyName = null;
  self.siteUrl = null;

  self.getAgencyName = function() {
    return self.agencyName;
  };

  self.getSiteUrl = function() {
    return self.siteUrl;
  };

  self.successCallback = null;
  self.failureCallback = null;

  self.loadAgencyInfo = function(successCallback, failureCallback) {
    self.successCallback = successCallback;
    self.failureCallback = failureCallback;

    setTimeout(self.getAgencyData, 50);
  };

  self.getAgencyData = function() {
    self.agencyName = '';
    self.siteUrl = 'http://www.bing.com';

    self.successCallback();
  };
}