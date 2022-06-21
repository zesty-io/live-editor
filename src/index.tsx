import React from "react"
import { ZestyExplorer } from "./components"
import { canUseDOM } from "./utils"
import { createRoot } from "react-dom/client"

if (process.env.NODE_ENV === "production") {
   console.log = () => {}
   console.error = () => {}
   console.debug = () => {}
}

console.log("Zesty live editor loaded  ")

export const main = () => {
   if (!canUseDOM()) {
      return null
   }

   document.body.innerHTML += '<div id="zesty-explorer"></div>'
   // legacy for deletion
   // render(<ZestyExplorer />, document.getElementById("zesty-explorer"))

   const container = document.getElementById("zesty-explorer")
   const root = createRoot(container!)
   root.render(<ZestyExplorer />)
}

main()
