import React from "react"
import { headerZUID } from "utils"
import { AppBar } from "@mui/material"
import Box from "@mui/material/Box"
import { useTheme } from "@mui/material/styles"
import { TabContainer } from "components"
import { urls } from "constants"
import { CustomLink } from "components/Buttons"
import AccountBoxIcon from "@mui/icons-material/AccountBox"
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos"
import ArchiveIcon from "@mui/icons-material/Archive"
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

   const managerLinks = [
      {
         name: "Edit Schema",
         label: "Edit Schema",
         icon: (
            <>
               <AccountBoxIcon fontSize="small" />
            </>
         ),
         href: `https://${
            content?.zestyInstanceZUID || headerZUID(response)
         }.manager.zesty.io/schema/${content?.meta?.model?.zuid}`,
      },
      {
         name: "Edit Content",
         label: "Edit Content",
         icon: (
            <>
               <AddToPhotosIcon fontSize="small" />
            </>
         ),
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
         name: "",
         label: "",
         href: `https://${
            content?.zestyInstanceZUID || headerZUID(response)
         }.manager.zesty.io/content/${content?.meta?.model?.zuid}/${content?.meta?.zuid}`,
      },
      {
         name: "Edit Permission",
         icon: (
            <>
               <ArchiveIcon fontSize="small" />
            </>
         ),
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
            <Box paddingTop={1} sx={{ display: "flex", alignItems: "center" }}>
               <Box sx={{ cursor: "pointer" }} paddingRight={4}>
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
            {managerLinks.map((e: any) => {
               return (
                  <Box>
                     {e.label && (
                        <CustomLink onClick={() => handleClick(e.href)} theme={theme}>
                           <span>{e?.icon}</span> <span>{e.label}</span>
                        </CustomLink>
                     )}
                  </Box>
               )
            })}
         </Box>
      </AppBar>
   )
}

export const Headers = React.memo(Index)
