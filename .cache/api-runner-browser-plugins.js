module.exports = [{
      plugin: require('../plugins/gatsby-plugin-top-layout/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-material-ui/gatsby-browser.js'),
      options: {"plugins":[],"disableAutoprefixing":true,"disableMinification":true},
    }]
