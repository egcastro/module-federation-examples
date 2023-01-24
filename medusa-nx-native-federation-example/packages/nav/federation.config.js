const {
  withNativeFederation,
  shareAll
} = require('@softarc/native-federation/build');

module.exports = withNativeFederation({
  name: 'nav',

  exposes: {
    './Header': 'packages/nav/src/app/Header.tsx',
    './Footer': 'packages/nav/src/app/Footer.tsx',
  },

  shared: {
    "react-dom/client": {
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
      includeSecondaries: false,
     },
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
      includeSecondaries: false,
    })
  },

  skip: [
    '@swc/helpers',
    '@softarc/native-federation-runtime',
    'core-js',
    'native-federation-plugin',
    'regenerator-runtime',
    'tslib'
  ],
});
