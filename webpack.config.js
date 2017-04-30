const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: __dirname + '/app/index',
    output: {
        path: __dirname + '/public/',
        filename: 'js/portfolio.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: __dirname + '/public/',
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=1000000'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/style.css')
    ],
    watch: false
}