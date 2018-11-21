var path = require("path")
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; //webpack可视化插件

module.exports = {
    entry: path.resolve(__dirname, './src/pages/alert/index.js'),
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
            {
                // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
                test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
                loader: 'file?name=./static/fonts/[name].[ext]',
            },
        ],
    },
    plugins: [
        // new ExtractTextPlugin("name.css"),
        // new BundleAnalyzerPlugin(),

        //打包公共代码,避免重复打包,比如很多页面都引入一个共同的组件
        new webpack.optimize.CommonsChunkPlugin({
          name: 'common', //公共抽离的js模块名称
          filename: '[name].bundle.js' , //生成后的文件名，虽说用了[name]，但实际上就是'common.bundle.js'了
          minChunks:2, //设定某个js模块被几个页面引用，才算是公共代码
        })
    ]
}