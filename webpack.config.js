const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    devtool: "eval-source-map",             // Change this in production @ https://webpack.js.org/configuration/devtool/
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'babel-loader',  // or 'ts-loader'
            exclude: /node_modules/
        }]
    },
    plugins: [
        new HtmlWebPackPlugin({             // generates <script> tags inside html file
            template: './src/index.html',   // location of html file
            filename: 'index.html'          // filename to use
        })
    ]
}