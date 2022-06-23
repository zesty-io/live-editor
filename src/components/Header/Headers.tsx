import React from "react"
import { AppBar } from "@mui/material"
import Box from "@mui/material/Box"
import { useTheme } from "@mui/material/styles"
import { TabContainer } from "components"
import { assets } from "constants"
interface Props {
   children: React.ReactNode
   content: any
   response: any
   setcurrentTab: any
   tabList: any
   settime: any
   modal: boolean
}

const Index = ({
   response,
   children,
   content,
   setcurrentTab,
   tabList,
   settime,
   modal,
}: Props) => {
   const theme = useTheme()
   console.log(content, response)

   return (
      <AppBar
         sx={{
            filter: modal ? "blur(5px)" : "none",
            background: "#fff",
            overflowX: "auto",
         }}
         position="static"
      >
         <Box
            paddingLeft={3}
            paddingRight={1}
            paddingY={2}
            style={{
               display: "flex",
               justifyContent: "space-between",
               width: "100%",
               alignItems: "center",
               background: theme.palette.background.paper,
            }}
         >
            <Box paddingTop={1} sx={{ display: "flex", alignItems: "center" }}>
               <Box sx={{ cursor: "pointer" }} paddingRight={4}>
                  <img
                     onClick={() => window.location.reload()}
                     src={assets.zestyLogo}
                     width="62px"
                     height="62px"
                     alt="Zesty.io Logo"
                  />
               </Box>
               <TabContainer
                  setcurrentTab={setcurrentTab}
                  tabList={tabList}
                  settime={settime}
               />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
               {/* <BasicMenu list={list} /> */}
               {children}
            </Box>
         </Box>
      </AppBar>
   )
}

export const Headers = React.memo(Index)
