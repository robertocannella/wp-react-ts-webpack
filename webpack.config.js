const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebPackPlugin({     // generates <script> tags inside html file
            template: './src/index.html',   // location of html file
            filename: 'index.html'          // filename to use
        })
    ]
}