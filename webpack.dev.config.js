const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // entry: './src/index.js',
    entry:{
        'hello-world':'./src/hello-world.js',
        'kiwi': './src/kiwi.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'development',
    devServer:{
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 9000
    },
    module:{
        rules:[
            {
                test: /\.(png|jpg)$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', "css-loader"
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    'style-loader', "css-loader","sass-loader"
                ]
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        "plugins": ["transform-class-properties"]
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'hello world',
            filename: 'hello-world.html',
            chunks: ['hello-world'],
            template: 'src/page-template.hbs',
            description: 'Some description'
        }),
        new HtmlWebpackPlugin({
            title: 'kiwi',
            filename: 'kiwi.html',
            chunks: ['kiwi'],
            template: 'src/page-template.hbs',
            description: 'kiwi'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:[
                '**/*',
                path.join(process.cwd(), 'build/**/*')
            ]
        })
    ]
}