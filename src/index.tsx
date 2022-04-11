import React from "react"
import ReactDOM from "react-dom"
import { ZestyExplorer } from "./views"
import { canUseDOM } from "./utils/index"

const main = () => {
   const test = 123
   console.log(test)
   if (!canUseDOM()) {
      return null
   }
   document.body.innerHTML += '<div id="zesty-explorer"></div>'
   return ReactDOM.render(<ZestyExplorer />, document.getElementById("zesty-explorer"))
}

main()
