import React from "react"
import ReactDOM from "react-dom"
import { ZestyExplorer } from "./components"
import { canUseDOM } from "./utils"

if (process.env.NODE_ENV === "production") {
   console.log = () => {}
   console.error = () => {}
   console.debug = () => {}
}

export const main = () => {
   if (!canUseDOM()) {
      return null
   }
   document.body.innerHTML += '<div id="zesty-explorer"></div>'
   ReactDOM.render(<ZestyExplorer />, document.getElementById("zesty-explorer"))
}

main()
