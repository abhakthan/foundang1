exports.config = {
  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['index-spec.js'],

  jasmineNodeOpts: {
    showColors: true
  }
};