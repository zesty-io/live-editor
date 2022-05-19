import { Box, Button } from "@mui/material"
import React from "react"
import { loginPromp } from "./styles"

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
