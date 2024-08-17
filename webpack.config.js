import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));

const entry = {
	app: './src/client/client.js',
};
const output = {
	filename: '[name].[contenthash].js',
	path: resolve(__dirname, 'dist'),
};
const plugins = [
	new HtmlWebpackPlugin({
		filename: 'index.html',
		template: 'src/client/index.html',
	}),
];
const mode = 'development';
const devtool = 'inline-source-map';

export default {
	entry,
	output,
	plugins,
	mode,
	devtool,
};