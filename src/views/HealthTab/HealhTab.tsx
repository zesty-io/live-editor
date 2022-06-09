import { Box } from "@mui/material"
import React from "react"

interface Props {
   content: any
   theme: any
}
export const HealhTab = ({ content, theme }: Props) => {
   console.log(content, theme)
   return (
      <Box
         sx={{
            background: "background.paper",
            overflow: "auto",
            height: "90vh",
            position: "relative",
         }}
      >
         Health
      </Box>
   )
}
