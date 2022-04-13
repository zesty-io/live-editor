import { Button } from "@material-ui/core"
import React from "react"

export const Tabs = ({ tabs, settime, setcurrentTab }: any) => {
   console.log(tabs)
   return (
      <div style={{ display: "flex", width: "100%" }}>
         {tabs.map((e: any) => {
            return (
               <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => {
                     setcurrentTab(e.value)
                     settime()
                  }}
               >
                  {e.label}
               </Button>
            )
         })}
      </div>
   )
}
