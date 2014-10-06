'use strict';

describe('Service: AccountService', function () {

  // load the service's module
  beforeEach(module('reconcileApp'));

  // instantiate service
  var AccountService;
  beforeEach(inject(function (_Account_) {
    Account = _Account_;
  }));

  it('should do something', function () {
    expect(!!Account).toBe(true);
  });

});
