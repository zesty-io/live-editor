import { Button } from "@material-ui/core"
import React from "react"

interface Tabs {
   id: number
   label: string
   value: string
}
export const Tabs = ({ tabs, settime, setcurrentTab }: any) => {
   return (
      <div style={{ display: "flex", width: "100%" }}>
         {tabs.map((e: Tabs) => {
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
