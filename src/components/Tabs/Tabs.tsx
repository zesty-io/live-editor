import React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"

interface Tabs {
   id: number
   label: string
   value: string
}
export const TabContainer = ({ tabList, settime, setcurrentTab }: any) => {
   const [value, setValue] = React.useState(0)

   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      console.log(event)
      console.log(newValue, 123123123)
      setcurrentTab(newValue)
      setValue(newValue)
      settime()
   }
   return (
      <Box>
         <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}>
            {" "}
            <Tabs
               value={value}
               onChange={handleChange}
               variant="scrollable"
               scrollButtons="auto"
               aria-label="scrollable auto tabs example"
            >
               {tabList.map((e: any) => (
                  <Tab
                     sx={{ background: "white", fontSize: "14px" }}
                     label={e.label}
                     value={e.value}
                  />
               ))}
            </Tabs>
         </Box>
      </Box>
   )
}
