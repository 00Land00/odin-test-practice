const path = require("path");

module.exports = {
  entry: "./src/js/index.js",
  rules: [
    {
      test: /\.(?:js|mjs|cjs)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          targets: "defaults",
          presets: [["@babel/preset-env"]],
        },
      },
    },
  ],
  resolve: {
    alias: {
      js: path.resolve(__dirname, "src/js"),
    },
  },
};
