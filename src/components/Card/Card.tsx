import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { TextField } from "@mui/material"
import { urls } from "constants"

export const OutlineCard = ({ handleCustomDomain, value, onChange }: any) => {
   const card = (
      <React.Fragment>
         <CardContent>
            <img
               src={urls.zestyBrandLogo}
               alt="Zesty Explorer"
               width={"50"}
               height={"50"}
            />
            <Typography color="text.secondary" gutterBottom sx={{ fontSize: "14" }}>
               Domain Not Valid
            </Typography>
            <Typography paddingBottom={2} variant="h5" component="div">
               Override Domain
            </Typography>
            <TextField
               id="outlined-basic"
               label="Enter WebEngine Domain"
               variant="outlined"
               value={value}
               onChange={onChange}
            />
         </CardContent>
         <CardActions>
            <Button size="small" variant="contained" onClick={handleCustomDomain}>
               Save
            </Button>
            <Button
               size="small"
               onClick={() => {
                  window.location.reload()
               }}
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
