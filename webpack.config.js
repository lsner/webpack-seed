var path = require("path")

module.exports = {
    entry: path.resolve(__dirname, './src/pages/alert/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle',
        chunkFilename: '[id].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' },
                ]
            }
        ],
    }
}