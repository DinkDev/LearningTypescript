function DefaultVmSharePointAccess() {
  this.agencyName = null;
  this.siteUrl = null;

  this.getAgencyName = function() {
    return this.agencyName;
  };

  this.getSiteUrl = function() {
    return this.siteUrl;
  };
}

var _successCallback = null;
var _failureCallback = null;

DefaultVmSharePointAccess.prototype.loadAgencyInfo = function(successCallback, failureCallback) {
  _successCallback = successCallback;
  _failureCallback = failureCallback;

  setTimeout(this.getAgencyData, 50);
};

DefaultVmSharePointAccess.prototype.getAgencyData = function() {
  this.agencyName = '';
  this.siteUrl = 'http://www.bing.com';

  _successCallback();
};