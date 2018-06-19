module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '../../public/javascripts',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    }
};