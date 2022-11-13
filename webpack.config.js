const webpack = require("webpack");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
module.exports = {
   
    mode: 'development',
    entry: '/src/main.ts', 
    output: {
        path: path.resolve(__dirname, "dist"), 
        publicPath: "/",
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],        
    },
    
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader' 
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: { appendTsSuffixTo: [/\.vue$/] },
            },
            {
                test: /\.(scss|sass|less|css)$/,
                use: [
                    'style-loader',
                    'css-loader', 
                    'sass-loader', // compile sass to css
                    // 'less-loader',
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new NodePolyfillPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html', // base html
        })
    ]
}