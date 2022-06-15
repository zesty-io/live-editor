import { Box, Card, CardContent, Typography } from "@mui/material"
import React from "react"
import loading from "../../assets/loading.svg"

const Index = () => {
   const card = (
      <React.Fragment>
         <CardContent>
            <Box
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  justifyItems: "center",
                  height: "100%",
                  width: "100%",
                  textAlign: "center",
                  userSelect: "none",
                  background: "#fff",
               }}
            >
               <Box
                  sx={{
                     display: "flex",
                     width: "100%",

                     justifyContent: "center",
                     justifyItems: "center",
                  }}
               >
                  <img src={loading} alt="Loading" height={100} width={100} />
               </Box>
               <Box
                  sx={{
                     display: "flex",
                     width: "100%",

                     justifyContent: "center",
                     justifyItems: "center",
                  }}
               >
                  <Typography
                     color="inherit"
                     sx={{
                        fontSize: "18px",
                        color: "#ff5d0a",
                     }}
                  >
                     Loading...
                  </Typography>
               </Box>
            </Box>
         </CardContent>
      </React.Fragment>
   )

   return (
      <Box sx={{ minWidth: 275 }}>
         <Card variant="outlined">{card}</Card>
      </Box>
   )
}

export const Loader = React.memo(Index)
