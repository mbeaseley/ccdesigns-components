import { Config } from "@stencil/core";
const { sass } = require("@stencil/sass");

export const config: Config = {
  namespace: "ccdesigns-ui",
  outputTargets: [
    {
      type: "dist"
    },
    {
      type: "www",
      serviceWorker: null
    }
  ],
  plugins: [ 
    sass({
      injectGlobalPaths: ["src/styles/styles_rules.scss"]
    })
  ],
  globalStyle: "src/global/global.scss"
};
