const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // entry: './src/index.js',
    entry: {
        'hello-world': './src/hello-world.js',
        'kiwi': './src/kiwi.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode:'production',
    optimization:{
        splitChunks: {
            chunks: "all"
        }
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
                    MiniCssExtractPlugin.loader, "css-loader"
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader, "css-loader","sass-loader"
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
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            title: 'hello world',
            filename: 'hello-world.html',
            description: 'Hello world',
            template: 'src/page-template.hbs',
            chunks: ['hello-world','vendors~hello-world~kiwi']
        }),       
        new HtmlWebpackPlugin({
            title: 'Kiwi',
            filename: 'kiwi.html',
            description: 'Kiwi',
            template: 'src/page-template.hbs',
            chunks: ['kiwi','vendors~hello-world~kiwi']
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:[
                '**/*',
                path.join(process.cwd(), 'build/**/*')
            ]
        })
    ]
}