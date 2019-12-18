const WrapperPlugin = require('./scripts/wrapper-webpack-plugin');

module.exports = (webpackConf) => {
  webpackConf.plugins.push(new WrapperPlugin({
    test: /\.js$/,
    header: 'var __channeler__=function(){',
    footer: '};__channeler__();',
  }));
}