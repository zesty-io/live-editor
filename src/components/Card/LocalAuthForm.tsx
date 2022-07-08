import React, { useState } from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { TextField } from "@mui/material"
import { assets } from "constants"

interface Props {
   setlocalToken: (e: string) => void
   setlocalLogin: (e: boolean) => void
}
export const LocalAuthForm = ({ setlocalToken, setlocalLogin }: Props) => {
   const [email, setemail] = useState("")
   const [password, setpassword] = useState("")
   const handleSuccess = (data: any) => {
      console.log(data, "d::")
      setlocalToken(data.meta.token)
      setlocalLogin(false)
   }
   const handleError = (error: any) => {
      console.log(error, "error::")
      setlocalLogin(false)
   }

   const postdata = async () => {
      const formData = new FormData()
      formData.append("email", email)
      formData.append("password", password)
      const headers = {
         "x-www-form-urlencoded": "application/json",
      }
      const rawResponse = await fetch("https://auth.api.zesty.io/login", {
         method: "POST",
         mode: "cors",
         referrerPolicy: "no-referrer",
         credentials: "omit",
         headers,
         body: formData,
      })
      const res = await rawResponse.json()
      res.code === 200 && handleSuccess(res)
      res.code !== 200 && handleError(res)
   }

   const card = (
      <React.Fragment>
         <CardContent>
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
                  width={"50"}
                  height={"50"}
               />
               <img
                  src={assets.zestyName}
                  alt="Zesty Explorer"
                  width={"100"}
                  height={"100"}
               />
            </Box>
            <Typography color="text.secondary" gutterBottom sx={{ fontSize: "18px" }}>
               Please Login
            </Typography>
            <Box gap={2} sx={{ display: "flex", flexDirection: "column" }}>
               <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e: any) => setemail(e.target.value)}
                  sx={{ fontSize: "12px" }}
               />
               <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type={"password"}
                  value={password}
                  onChange={(e: any) => setpassword(e.target.value)}
                  sx={{ fontSize: "12px" }}
               />
            </Box>
         </CardContent>
         <CardActions>
            <Button
               size="small"
               variant="contained"
               onClick={postdata}
               sx={{ fontSize: "14px" }}
            >
               Save
            </Button>
            <Button
               size="small"
               onClick={() => {
                  window.location.reload()
               }}
               sx={{ fontSize: "14px" }}
            >
               Close
            </Button>
         </CardActions>
      </React.Fragment>
   )
   return (
      <Box sx={{ minWidth: 275 }}>
         <Card variant="outlined">{card}</Card>
      </Box>
   )
}
