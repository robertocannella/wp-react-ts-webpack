const HTMLWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HTMLWebPackPlugin({     // generates <script> tags inside html file
            template: './src/index.html',   // location of html file
            filename: 'index.html'          // filename to use
        })
    ]
}