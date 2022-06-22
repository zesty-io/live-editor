import path from "path"
import { merge } from "webpack-merge"
import common from "./webpack.config.common"

const config = merge(common, {
   devtool: "eval",
   devServer: {
      static: {
         directory: path.join(__dirname, "dist"),
      },
      // for zesty.io domain to work on CORS
      host: "test.zesty.io",
      server: {
         type: "https",
      },
      compress: true,
      port: 9000,
   },
})
export default config
