const path = require('path');

module.exports = {
    entry: './index.js',
    mode: 'development',
    module:{
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
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