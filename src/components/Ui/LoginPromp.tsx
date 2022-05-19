import { Box, Button } from "@mui/material"
import React from "react"

const loginPromp = {
   position: "fixed",
   top: "25%",
   left: "15%",
} as const

export const LoginPrompt = () => {
   return (
      <Box sx={loginPromp}>
         <h1>Please Login</h1>
         <Button
            href={`https://accounts.zesty.io/login`}
            variant="contained"
            color="secondary"
            size="small"
         >
            Sign in to Zesty.io
         </Button>
      </Box>
   )
}
