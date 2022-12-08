// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'shell',
  remotes: ['login', 'plp', 'pdp', 'checkout', 'orders'],
};

module.exports = moduleFederationConfig;
