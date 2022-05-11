import path from "path"
import { Configuration } from "webpack"
import Dotenv from "dotenv-webpack"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import "webpack-dev-server"
import webpack from "webpack"
import { CleanWebpackPlugin } from "clean-webpack-plugin"

const config: Configuration = {
   mode: "development",
   devtool: "inline-source-map",
   entry: "./src/index.tsx",
   module: {
      rules: [
         {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: [
                     "@babel/preset-env",
                     "@babel/preset-react",
                     "@babel/preset-typescript",
                  ],
               },
            },
         },
      ],
   },
   resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      modules: [path.resolve(__dirname), "node_modules"],
      fallback: {
         fs: false,
         tls: false,
         net: false,
         path: false,
         zlib: false,
         http: false,
         https: false,
         stream: false,
         crypto: false,
         os: false,
         "crypto-browserify": require.resolve("crypto-browserify"), // if you want to use this module also don't forget npm i crypto-browserify
      },
   },
   output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle-dev.js",
      publicPath: "",
      globalObject: "this",
   },
   devServer: {
      static: "./build",
      port: 3000,
   },
   plugins: [
      new ForkTsCheckerWebpackPlugin({
         async: false,
      }),
      new Dotenv({
         systemvars: true,
      }),
      new webpack.ProvidePlugin({
         process: "process/browser",
      }),
      new webpack.ProvidePlugin({
         window: "global/window",
      }),
      new CleanWebpackPlugin(),
   ],
}

export default config
