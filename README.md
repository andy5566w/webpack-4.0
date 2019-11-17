1. npm init -y
2. Npm webpack  webpack-cli —save-dev
3. webpack.config.js
4. npm install file-loader --save-dev
5. npm install sass-loader node-sass webpack --save-dev
6. npm install @babel/core babel-loader @babel/preset-env babel-plugin-transform-class-properties --save-dev
7. npm install terser-webpack-plugin --save-dev   (讓bundle.js 變得更精簡terser)
8. npm install mini-css-extract-plugin --save-dev (將css和js分開管理)
9. npm install clean-webpack-plugin --save-dev  (清除舊的file) lecture 18
10. npm install html-webpack-plugin --save-dev (如果使用contenthash, 這個plugin會自動加上contenthash) 19lecture
11. npm install handlebars-loader --save-dev (搭配html-webpack-plugin)


TerserPlugin 在mode = production 的時候就已經default在裡面了<br>


