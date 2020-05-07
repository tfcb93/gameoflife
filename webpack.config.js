const path = require('path');

module.exports = {
    entry: './index.js',
    mode: 'development',
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_module/,
                loader: "babel-loader"
            }
        ],
    },
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}