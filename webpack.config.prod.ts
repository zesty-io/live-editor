import { merge } from "webpack-merge"
import common from "./webpack.config.common"

const config = merge(common, {
   devtool: false,
   performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
   },
})
export default config
