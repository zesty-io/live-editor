import { Box, Button, Typography } from "@mui/material"
import React from "react"

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
}
export const Subheaders = ({ theme, content, btnList = [] }: Props) => {
   return (
      <Box
         paddingX={2}
         paddingY={1}
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
               Browsing item <strong> {content?.meta?.web?.seo_link_text} </strong>
               from the <strong>{content?.meta?.model_alternate_name} </strong>
               Content Model
            </Typography>
         </Box>
         <Box sx={{ display: "flex", gap: ".5rem" }}>
            {btnList.map((e) => {
               return (
                  <Button
                     sx={{ whiteSpace: "nowrap", cursor: "pointer" }}
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
            {/* <Button
               sx={{ whiteSpace: "nowrap", cursor: "pointer" }}
               color="primary"
               size="small"
               variant="contained"
               target="_blank"
               href={urls.parselyDocs}
            >
               Parsely Docs
            </Button>

            <Button
               sx={{ whiteSpace: "nowrap", cursor: "pointer" }}
               color="primary"
               size="small"
               variant="contained"
               target="_blank"
               href={urls.nextJsDocs}
            >
               Next Js Docs
            </Button> */}
         </Box>
      </Box>
   )
}
