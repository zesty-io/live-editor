import { Box, Typography } from "@mui/material"
import { NormalBtn } from "components"
import { assets } from "constants"
import React from "react"

const loginPromp = {
   display: "flex",
   flexDirection: "column",
   justifyItems: "center",
   justifyContent: "center",
   alignItems: "center",
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
         <Box
            paddingTop={1}
            sx={{
               width: "100%",
               display: "flex",
               flexDirection: "row",
               justifyItems: "center",
               justifyContent: "center",
               alignItems: "center",
               gap: ".5rem",
            }}
         >
            <img
               src={assets.zestyLogo}
               alt="Zesty Explorer"
               width={"100"}
               height={"100"}
            />
            <img
               src={assets.zestyName}
               alt="Zesty Explorer"
               width={"150"}
               height={"150"}
            />
         </Box>
         <Typography sx={{ fontSize: "32px", fontWeight: "bold" }}>
            Please Login
         </Typography>
         <NormalBtn href={`https://accounts.zesty.io/login`}>
            Sign in to Zesty.io
         </NormalBtn>
      </Box>
   )
}
