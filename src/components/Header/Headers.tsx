import React from "react"
import { headerZUID } from "utils"
import { AppBar, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import { useTheme } from "@mui/material/styles"
import { TabContainer } from "components"
import { urls } from "constants"
import { CustomButton } from "components/Buttons"
interface Props {
   children: React.ReactNode
   content: any
   response: any
   setcurrentTab: any
   tabList: any
   settime: any
}

const Index = ({
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
         name: "",
         label: "",
         href: `https://${
            content?.zestyInstanceZUID || headerZUID(response)
         }.manager.zesty.io/content/${content?.meta?.model?.zuid}/${content?.meta?.zuid}`,
      },
      {
         name: "Edit Permission",
         label: "Edit Permission",
         href: `https://accounts.zesty.io/instances/${
            content?.zestyInstanceZUID || headerZUID(response)
         }`,
      },
   ]
   const handleClick = (url: string) => {
      // @ts-ignore
      window.open(url, "_blank").focus()
   }
   return (
      <AppBar sx={{ background: "#fff", overflowX: "auto" }} position="static">
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
            <Box sx={{ display: "flex", alignItems: "center" }}>
               <Box sx={{ cursor: "pointer", paddingRight: "1rem" }}>
                  <img
                     onClick={() => window.location.reload()}
                     src={urls.zestyBrandLogoMid}
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
         <Box
            sx={{
               width: "100%",
               display: "flex",
               flexWrap: "wrap",
               justifyContent: "space-evenly",
               color: "black",
            }}
         >
            {list.map((e: any) => {
               return (
                  <Box>
                     {e.label && (
                        <CustomButton onClick={() => handleClick(e.href)} theme={theme}>
                           <Typography>{e.label}</Typography>
                        </CustomButton>
                     )}
                  </Box>
               )
            })}
         </Box>
      </AppBar>
   )
}

export const Headers = React.memo(Index)
