/* global describe, it */
'use strict';

require('../src/');

describe('trollog node module', function () {
  it('should have console alert', function () {
    spyOn( window, 'alert' );
    console.log('sup');
    expect( window.alert ).toHaveBeenCalled();
  });
});
