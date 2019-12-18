const WrapperPlugin = require('./scripts/wrapper-webpack-plugin');

module.exports = (webpackConf) => {
  const __self__ = `var __self__=(typeof self)!=='undefined'?self:this`;
  webpackConf.plugins.push(new WrapperPlugin({
    test: /\.js$/,
    header: `${__self__};__self__.__channeler__=function(){`,
    footer: '};__self__.__channeler__();',
  }));
}