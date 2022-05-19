import { Box, Typography } from "@mui/material"
import React from "react"

interface Props {
   theme: any
   content: any
}
export const Subheaders = ({ theme, content }: Props) => {
   return (
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
   )
}
