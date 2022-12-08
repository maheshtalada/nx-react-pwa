// @ts-check

const { withModuleFederation } = require('@nrwl/react/module-federation');
const baseConfig = require('./module-federation.config');

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const prodConfig = {
  ...baseConfig,
  /*
   * Remote overrides for production.
   * Each entry is a pair of an unique name and the URL where it is deployed.
   *
   * e.g.
   * remotes: [
   *   ['app1', '//app1.example.com'],
   *   ['app2', '//app2.example.com'],
   * ]
   *
   * You can also use a full path to the remoteEntry.js file if desired.
   *
   * remotes: [
   *   ['app1', '//example.com/path/to/app1/remoteEntry.js'],
   *   ['app2', '//example.com/path/to/app2/remoteEntry.js'],
   * ]
   */
  remotes: [
    ['login', '//localhost:4201/'],
    ['plp', '//localhost:4202/'],
    ['pdp', '//localhost:4203/'],
    ['checkout', '//localhost:4204/'],
    ['orders', '//localhost:4205/'],
  ],
};

module.exports = withModuleFederation(prodConfig);
