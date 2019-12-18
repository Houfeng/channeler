const WrapperPlugin = require('./scripts/wrapper-webpack-plugin');

module.exports = (webpackConf) => {
  webpackConf.plugins.push(new WrapperPlugin({
    test: /\.js$/,
    header: 'self.__channeler__=function(){',
    footer: '};self.__channeler__();',
  }));
}