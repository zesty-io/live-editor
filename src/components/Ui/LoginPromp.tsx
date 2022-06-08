import { Box, Typography } from "@mui/material"
import { NormalBtn } from "components"
import React from "react"

const loginPromp = {
   display: "flex",
   flexDirection: "column",
   justifyItems: "center",
   position: "fixed",
   top: "25%",
   left: "15%",
   background: "#fff",
   gap: "1rem",
   userSelect: "none",
} as const

export const LoginPrompt = () => {
   return (
      <Box sx={loginPromp}>
         <Typography sx={{ fontSize: "32px", fontWeight: "bold" }}>
            Please Login
         </Typography>
         <NormalBtn href={`https://accounts.zesty.io/login`}>
            Sign in to Zesty.io
         </NormalBtn>
      </Box>
   )
}
