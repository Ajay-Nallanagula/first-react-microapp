const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "firstReactMicroapp",
    projectName: "first-example-microapp",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    //externals: ['single-spa', /^utility-microapp\//]
    externals: ['single-spa', 'utility-microapp'],
    // modify the webpack config however you'd like to by adding to this object
  });
};
