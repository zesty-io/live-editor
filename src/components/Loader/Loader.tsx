import { Box } from "@mui/material"
import React from "react"

export const Loader = () => {
   return (
      <Box
         sx={{
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "2147483647",
            height: "100%",
            width: "100%",
            background: "#FEFF01",
         }}
      >
         <h1>Loading </h1>
      </Box>
   )
}
