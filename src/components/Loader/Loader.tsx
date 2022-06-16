import { Box, Card, CardContent } from "@mui/material"
import { urls } from "constants"
import React from "react"
import loading from "../../assets/loading.svg"
import zestyLogoName from "../../assets/zestyname.svg"
import { LoadingText } from "./LoadingText"

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
                  gap={1}
                  sx={{
                     display: "flex",
                     width: "100%",
                     alignItems: "center",
                     justifyContent: "center",
                     justifyItems: "center",
                  }}
               >
                  <img
                     src={urls.zestyBrandLogo}
                     alt="Zesty Explorer"
                     width={"50"}
                     height={"50"}
                  />
                  <img
                     src={zestyLogoName}
                     alt="Zesty Explorer"
                     width={"100"}
                     height={"100"}
                  />
               </Box>
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
                  <LoadingText />
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
