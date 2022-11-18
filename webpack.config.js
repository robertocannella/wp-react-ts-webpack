import HTMLWebPackPlugin from 'html-webpack-plugin';

export const plugins = [
    new HTMLWebPackPlugin({
        template: './src/index.html',
        filename: 'index.html' // filename to use
    })
];