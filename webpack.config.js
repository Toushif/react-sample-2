const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
    },
    module: {
        rules: [
            {
                test: /\.js|[x]$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
    ],
    devtool: "source-map",
    devServer: {
        static: {
            directory: "./dist",
        },
    },
};
