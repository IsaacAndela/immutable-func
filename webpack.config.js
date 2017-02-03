/*eslint-env node*/

module.exports = function (env, argv) {
	const minimize = argv['optimize-minimize'] || argv.optimizeMinimize;

	return {
		entry: './immutableFunc.js',
		devtool: 'source-map',

		output: {
			filename: `immutableFunc.umd${minimize ? '.min' : ''}.js`,
			library: 'immutableFunc',
			libraryTarget: 'umd',
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules)/,
					loader: 'babel-loader',
				},
			],
		},
	};
};
