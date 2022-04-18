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
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "space-evenly",
               }}
            >
               <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
               >
                  <img
                     src="https://storage.googleapis.com/brand-assets.zesty.io/zesty-io-app-icon-transparent.png"
                     width="42px"
                     height="42px"
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
               <Button
                  href={`https://accounts.zesty.io/instances/${content?.zestyInstanceZUID}`}
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ fontSize: "12px", whiteSpace: "nowrap" }}
               >
                  <Box paddingX={2} paddingY={1}>
                     Open Zesty Account
                  </Box>
               </Button>
               <Button
                  href={`https://${content?.zestyInstanceZUID ||
                     headerZUID(response)}.manager.zesty.io/content/${
                     content?.meta?.model?.zuid
                  }/${content?.meta?.zuid}`}
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ fontSize: "12px", whiteSpace: "nowrap" }}
               >
                  <Box paddingX={2} paddingY={1}>
                     Open Zesty Manager
                  </Box>
               </Button>
               <Button
                  href={`https://${content?.zestyInstanceZUID ||
                     headerZUID(response)}.manager.zesty.io/schema/${
                     content?.meta?.model?.zuid
                  }`}
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ fontSize: "12px", whiteSpace: "nowrap" }}
               >
                  <Box paddingY={1} paddingX={2}>
                     Open Schema
                  </Box>
               </Button>

               {children}
            </Box>
         </Box>
      </AppBar>
   )
}
