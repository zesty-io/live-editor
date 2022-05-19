/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-target-blank */
import React from "react"
import { headerZUID } from "utils"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import { useTheme } from "@mui/material/styles"
import { TabContainer } from "components"
import { BasicMenu } from "components/Ui"
interface Props {
   children: React.ReactNode
   content: any
   response: any
   setcurrentTab: any
   tabList: any
   settime: any
}

export const Headers = ({
   response,
   children,
   content,
   setcurrentTab,
   tabList,
   settime,
}: Props) => {
   const theme = useTheme()

   const list = [
      {
         name: "Edit Schema",
         label: "Edit Schema",
         href: `https://${
            content?.zestyInstanceZUID || headerZUID(response)
         }.manager.zesty.io/schema/${content?.meta?.model?.zuid}`,
      },
      {
         name: "Edit Content",
         label: "Edit Content",
         href: `https://${
            content?.zestyInstanceZUID || headerZUID(response)
         }.manager.zesty.io/content/${content?.meta?.model?.zuid}/${content?.meta?.zuid}`,
      },
      {
         name: "Edit Permission",
         label: "Edit Permission",
         href: `https://accounts.zesty.io/instances/${content?.zestyInstanceZUID}`,
      },
   ]
   return (
      <AppBar sx={{ background: "#fff" }} position="static">
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
            <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
               <Box>
                  <img
                     onClick={() => window.location.reload()}
                     src="https://storage.googleapis.com/brand-assets.zesty.io/zesty-io-app-icon-transparent.png"
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
               <BasicMenu list={list} />

               {children}
            </Box>
         </Box>
      </AppBar>
   )
}
