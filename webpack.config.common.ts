import path from "path"
import { Configuration } from "webpack"
import Dotenv from "dotenv-webpack"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import "webpack-dev-server"
import webpack from "webpack"
import { CleanWebpackPlugin } from "clean-webpack-plugin"
import TerserPlugin from "terser-webpack-plugin"
import CompressionPlugin from "compression-webpack-plugin"

const config: Configuration = {
   entry: "./src/index.tsx",
   mode: "production",
   devtool: false,
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
         {
            test: /\.svg$/,
            use: [
               {
                  loader: "svg-url-loader",
                  options: {
                     limit: 10000,
                  },
               },
            ],
         },
      ],
   },
   resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      modules: [path.resolve(__dirname), "src", "node_modules"],
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
      path: path.resolve(__dirname, "dist"),
      filename: "explorer.production.js",
      library: "Explorer",
      libraryTarget: "umd",
      publicPath: "",
   },
   devServer: {
      static: "./dist",
   },
   performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
   },
   optimization: {
      minimize: true,
      minimizer: [
         new TerserPlugin({
            parallel: true,
            minify: TerserPlugin.swcMinify,
            terserOptions: {
               format: {
                  comments: false,
               },
            },
            extractComments: false,
         }),
      ],
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
      new CleanWebpackPlugin(),
      new CompressionPlugin(),
   ],
}

export default config
