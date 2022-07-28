import React from "react"
import { ZestyExplorer } from "./components"
import { createZestyDiv } from "utils"
import * as helper from "utils/index"
import { dummydata } from "constants"
import { render } from "react-dom"

if (process.env.NODE_ENV === "production") {
   console.log = () => {}
   console.error = () => {}
   console.debug = () => {}
}

console.log(" ********** Zesty live editor loaded v1 ************ ")

export const ZestyLiveEditor = (content?: any) => {
   if (!helper.canUseDOM()) {
      return null
   }
   createZestyDiv()

   const container = document.getElementById("zesty-explorer")
   render(<ZestyExplorer content={content} />, container)
}

process.env.NODE_ENV === "development" ? ZestyLiveEditor(dummydata) : ZestyLiveEditor()
// ZestyLiveEditor(dummydata)
