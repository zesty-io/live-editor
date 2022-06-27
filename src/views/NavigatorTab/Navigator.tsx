import { Subheaders } from "components"
import React from "react"

interface Props {
   content: any
   theme: any
   response: any
}
export const NavigatorTab = ({ content, theme, response }: Props) => {
   console.log(content, theme, response)
   return (
      <>
         <Subheaders response={response} content={content} theme={theme} />
      </>
   )
}
