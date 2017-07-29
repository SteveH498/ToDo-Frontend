const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/public'),
		publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.scss', '.css', '.json']
    },
    module: {

        rules: [{
                exclude: /node_modules/,
                test: /\.js/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['./node_modules', './node_modules/grommet/node_modules']
                        }
                    }
                ]
            },
        ]
    },
	devServer: {
		historyApiFallback: true,
	}
};