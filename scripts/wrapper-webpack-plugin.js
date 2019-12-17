'use strict';

var ConcatSource = require('webpack-core/lib/ConcatSource');
var ModuleFilenameHelpers = require("webpack/lib/ModuleFilenameHelpers");

/**
 * @param args
 * @param {string|function} [args.header]
 * @param {string|function} [args.footer]
 * @param {string|RegExp} [args.test]
 * @constructor
 */
function WrapperPlugin(args) {
	if (typeof args !== 'object') {
		throw new TypeError('Argument "args" must be an object.');
	}

	this.header = args.hasOwnProperty('header') ? args.header : '';
	this.footer = args.hasOwnProperty('footer') ? args.footer : '';
	this.test = args.hasOwnProperty('test') ? args.test : '';
}

function apply(compiler) {
	var header = this.header;
	var footer = this.footer;
	var tester = {test: this.test};

	compiler.plugin('compilation', function (compilation) {
		compilation.plugin('optimize-chunk-assets', function (chunks, done) {
			wrapChunks(compilation, chunks, footer, header);
			done();
		})
	});

	function wrapFile(compilation, fileName) {
		var headerContent = (typeof header === 'function') ? header(fileName) : header;
		var footerContent = (typeof footer === 'function') ? footer(fileName) : footer;

		compilation.assets[fileName] = new ConcatSource(
				String(headerContent),
				compilation.assets[fileName],
				String(footerContent));
	}

	function wrapChunks(compilation, chunks) {
		chunks.forEach(function (chunk) {
			chunk.files.forEach(function (fileName) {
				if (ModuleFilenameHelpers.matchObject(tester, fileName)) {
					wrapFile(compilation, fileName);
				}
			});
		});
	}
}

Object.defineProperty(WrapperPlugin.prototype, 'apply', {
	value: apply,
	enumerable: false
});

module.exports = WrapperPlugin;