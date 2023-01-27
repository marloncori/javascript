const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
       path: __dirname + '/dist',
       filename: 'bundle.js'
    },
    mode: 'development',
    plugins: [
        new HTMLWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        
           {
                test: /\.html$/i,
                use: ["html-loader"],
            },
        ],
    },
};