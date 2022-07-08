import React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { TextField } from "@mui/material"
import { assets } from "constants/index"

interface Props {
   handleCustomDomain: () => void
   value: string
   onChange: (e: any) => void
}

export const UnauthorizedCard = ({ handleCustomDomain, value, onChange }: Props) => {
   const card = (
      <React.Fragment>
         <CardContent>
            <Box
               data-testid="unAuthorizeCard"
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
               Misconfigures Settings
            </Typography>
            <Typography
               paddingBottom={2}
               variant="h5"
               component="div"
               sx={{ fontSize: "14px" }}
            >
               Enter Secret Key
            </Typography>
            <TextField
               id="outlined-basic"
               label="Enter WebEngine Domain"
               variant="outlined"
               value={value}
               onChange={onChange}
               sx={{ fontSize: "12px" }}
            />
         </CardContent>
         <CardActions>
            <Button
               size="small"
               variant="contained"
               onClick={handleCustomDomain}
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
