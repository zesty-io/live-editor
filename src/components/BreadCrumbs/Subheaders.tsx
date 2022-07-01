import { Box, Button, Typography } from "@mui/material"
import React from "react"
import { headerZUID } from "utils"
import { CustomBtn, CustomLink } from "components/Buttons"
import AccountBoxIcon from "@mui/icons-material/AccountBox"
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos"
import ArchiveIcon from "@mui/icons-material/Archive"
import EditIcon from "@mui/icons-material/Edit"
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh"
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly"
import DevicesIcon from "@mui/icons-material/Devices"

interface Btn {
   name: string
   href: string
   label: string
   value: string
}
interface Props {
   theme: any
   content: any
   btnList?: Btn[]
   response: any
   editMode?: boolean
   onClick?: any
}
export const Subheaders = ({
   editMode,
   theme,
   content,
   btnList = [],
   response,
   onClick,
}: Props) => {
   const [isMobile, setisMobile] = React.useState(true)
   const managerLinks = [
      {
         name: "Edit Schema",
         label: "Edit Schema",
         icon: (
            <>
               <AccountBoxIcon fontSize="inherit" />
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
               <AddToPhotosIcon fontSize="inherit" />
            </>
         ),
         href: `https://${
            content?.zestyInstanceZUID || headerZUID(response)
         }.manager.zesty.io/content/${content?.meta?.model?.zuid}/${content?.meta?.zuid}`,
      },
      {
         name: "Edit Permission",
         icon: (
            <>
               <ArchiveIcon fontSize="inherit" />
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

   const handleDevPreview = (isMobile: boolean) => {
      setisMobile(!isMobile)
      if (isMobile) {
         handleMobile()
      } else {
         handleDesktop()
      }
   }

   return (
      <>
         <Box
            sx={{
               width: "100%",
               display: "flex",
               flexWrap: "wrap",
               justifyContent: "space-evenly",
               color: "black",
               backgroundColor: theme.palette.common.white,
            }}
         >
            {managerLinks.map((e: any) => {
               return (
                  <Box>
                     {e.label && (
                        <CustomLink onClick={() => handleClick(e.href)} theme={theme}>
                           <Box
                              sx={{ display: "flex", alignItems: "center", gap: ".5rem" }}
                           >
                              <Box style={{ fontSize: "22px" }}>{e?.icon}</Box>
                              <Box paddingBottom={1}>{e.label}</Box>
                           </Box>
                        </CustomLink>
                     )}
                  </Box>
               )
            })}
            <Box>
               {
                  <CustomLink onClick={() => handleDevPreview(isMobile)} theme={theme}>
                     <Box sx={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
                        <Box style={{ fontSize: "22px" }}>
                           {!isMobile ? (
                              <MobileFriendlyIcon fontSize="inherit" />
                           ) : (
                              <DevicesIcon fontSize="inherit" />
                           )}
                        </Box>
                        <Box paddingBottom={1}>{"Device Preview"}</Box>
                     </Box>
                  </CustomLink>
               }
            </Box>
         </Box>
         <Box
            paddingX={2}
            paddingY={2}
            sx={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               backgroundColor: theme.palette.alternate.main,
            }}
         >
            <Box sx={{ width: "100%" }}>
               {" "}
               <Typography
                  id="gotoTop"
                  sx={{ fontSize: "14px", whiteSpace: "normal" }}
                  color={theme.palette.common.black}
                  component={"h6"}
               >
                  Browsing item{" "}
                  <strong style={{ color: theme.palette.zesty.zestyOrange }}>
                     {" "}
                     {content?.meta?.web?.seo_link_text}{" "}
                  </strong>
                  from the{" "}
                  <strong style={{ color: theme.palette.zesty.zestyOrange }}>
                     {content?.meta?.model_alternate_name}{" "}
                  </strong>
                  Content Model
               </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: ".5rem" }}>
               {editMode !== undefined && (
                  <CustomBtn
                     padding="8px 16px"
                     onClick={onClick}
                     size="16px"
                     theme={theme}
                  >
                     {editMode ? (
                        <Box sx={{ alignItems: "center", display: "flex", gap: ".5rem" }}>
                           <AutoFixHighIcon
                              fontSize="inherit"
                              titleAccess="Editing ..."
                           />{" "}
                           Edit Mode: On
                        </Box>
                     ) : (
                        <Box sx={{ alignItems: "center", display: "flex", gap: ".5rem" }}>
                           <EditIcon fontSize="inherit" titleAccess="Edit Now" />
                           Edit Now!
                        </Box>
                     )}
                  </CustomBtn>
               )}
               {btnList.map((e) => {
                  return (
                     <Button
                        sx={{ whiteSpace: "nowrap", cursor: "pointer", fontSize: "14px" }}
                        color="primary"
                        size="small"
                        variant="contained"
                        target="_blank"
                        href={e.href}
                     >
                        {e.label}
                     </Button>
                  )
               })}
            </Box>
         </Box>
      </>
   )
}

export const handleMobile = (id = "__next") => {
   const mainSite: any = typeof window !== "undefined" && document.getElementById(id)!
   mainSite.style.width = "414px"
   mainSite.style.height = "auto"
   mainSite.style.overflow = "hidden"
   mainSite.style.position = "absolute"
   mainSite.style.left = "60vw"
   mainSite.style.top = "10vh"

   // @ts-ignore
   document.getElementsByTagName("meta")["viewport"].content = "width= 400"
}
export const handleDesktop = (id = "__next") => {
   const mainSite: any = typeof window !== "undefined" && document.getElementById(id)!
   mainSite.style.width = "auto"
   mainSite.style.height = "auto"
   mainSite.style.overflow = "hidden"
   mainSite.style.position = "relative"
   mainSite.style.left = "0"
   mainSite.style.top = "0"

   // @ts-ignore
   document.getElementsByTagName("meta")["viewport"].content = "width= auto"
}
