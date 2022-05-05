/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-target-blank */
import React from "react"
import { headerZUID } from "utils"
import AppBar from "@mui/material/AppBar"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { useTheme } from "@mui/material/styles"
// import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
interface Props {
   children: React.ReactNode
   content: any
   response: any
}

// const linkStyles = {
//    padding: "5px",
//    display: "inline-block",
//    color: "#497edf",
// }

export const Headers = ({ response, children, content }: Props) => {
   const theme = useTheme()

   return (
      <AppBar position="static">
         <Box
            paddingX={4}
            paddingY={2}
            style={{
               display: "flex",
               width: "100%",
               margin: "0 auto",
               background: theme.palette.background.paper,
            }}
         >
            <Box
               style={{
                  display: "flex",
               }}
            >
               <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                  <Typography
                     variant="h6"
                     noWrap
                     component="div"
                     sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                  >
                     <img
                        src="https://storage.googleapis.com/brand-assets.zesty.io/zesty-io-app-icon-transparent.png"
                        width="62px"
                        height="62px"
                        alt="Zesty.io Logo"
                     />
                  </Typography>

                  <Typography
                     sx={{ fontSize: "14px", whiteSpace: "normal" }}
                     color={theme.palette.common.black}
                     component={"h6"}
                  >
                     Browsing item <strong> {content?.meta?.web?.seo_link_text} </strong>
                     from the <strong>{content?.meta?.model_alternate_name} </strong>
                     Content Model
                  </Typography>
               </Box>
               <Box>
                  <Button
                     href={`https://accounts.zesty.io/instances/${content?.zestyInstanceZUID}`}
                     variant="contained"
                     color="secondary"
                     size="small"
                  >
                     Edit Permissions
                  </Button>
                  <Button
                     href={`https://${
                        content?.zestyInstanceZUID || headerZUID(response)
                     }.manager.zesty.io/content/${content?.meta?.model?.zuid}/${
                        content?.meta?.zuid
                     }`}
                     variant="contained"
                     color="secondary"
                     target="_blank"
                     size="small"
                  >
                     Edit Content
                  </Button>
                  <Button
                     href={`https://${
                        content?.zestyInstanceZUID || headerZUID(response)
                     }.manager.zesty.io/schema/${content?.meta?.model?.zuid}`}
                     variant="contained"
                     color="secondary"
                     size="small"
                     target="_blank"
                  >
                     Edit Schema
                  </Button>

                  {children}
               </Box>
            </Box>
         </Box>
      </AppBar>
   )
}
