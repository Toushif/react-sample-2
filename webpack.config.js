const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js|[x]$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },
    devtool: "source-map"
};