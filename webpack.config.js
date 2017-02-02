/*eslint-env node*/

const packageJson = require('./package.json');
const babelrc = Object.assign({}, packageJson.babel);

// ES6 Modules are handled by Webpack so Babel does not have to convert them
babelrc.presets.find((preset) => preset[0] === 'es2015').push({modules: false});

module.exports = {
	entry: './immutableFunc.js',

	output: {
		filename: 'immutableFunc.umd.js',
		library: 'immutableFunc',
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				options: babelrc,
			},
		],
	},
};
