import React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import { makeStyles } from "@material-ui/core"

interface Tabs {
   id: number
   label: string
   value: string
}

const useStyles = makeStyles({
   customStyleOnTab: {
      fontSize: "15px",
      color: "green",
   },
   customStyleOnActiveTab: {
      color: "red",
   },
   activeTab: {
      fontSize: "16px",
      fontWeight: 600,
      color: "pink",
   },
})
export const TabContainer = ({ tabList, settime, setcurrentTab }: any) => {
   const [value, setValue] = React.useState(0)
   const classes = useStyles()
   // @ts-ignore
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
               classes={{ indicator: classes.customStyleOnActiveTab }}
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
