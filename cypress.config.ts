/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig } from "cypress"

export default defineConfig({
   videoCompression: false,
   video: false,
   env: {
      API_AUTH: "https://auth.api.dev.zesty.io",
      COOKIE_NAME: "DEV_APP_SID",
   },
   e2e: {
      setupNodeEvents(on, config) {
         // implement node event listeners here
      },
   },
})
