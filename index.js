/* jshint node: true */
'use strict';

module.exports = {
  name: 'ui-mobile-tab-bar',
  description: 'A simple tab bar that\'s mobile inspired',
  included: function(app) {
    this._super.included(app);
    // component CSS
    app.import('vendor/ui-mobile-tab-bar/ui-mobile-tab-bar.css'); 
  }
};
