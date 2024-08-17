import express from 'express';

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config.js';

const app = express();
const port = 25565;

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler));

app.use(express.static('public'));

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});