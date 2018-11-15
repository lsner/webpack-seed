var path = require("path")
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/img/img.jpg'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ],
                // use: ExtractTextPlugin.extract('css-loader', 'style-loader','less-loader'),
            },
            {
                // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
                // 如下配置，将小于8192byte的图片转成base64码
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=./static/img/[hash].[ext]',
            },
        ],
    },
    // plugins: [
    //     new ExtractTextPlugin("name.css")
    //   ]
}