import { Box, Typography } from "@mui/material"
import React from "react"
import loading from "../../assets/loading.svg"

const Index = () => {
   return (
      <Box
         sx={{
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "2147483647",
            height: "100%",
            width: "100%",
            background: "#fff",
         }}
      >
         <Box
            sx={{
               display: "flex",
               justifyItems: "center",
               flexDirection: "column",
               height: "100%",
               width: "100%",
               background: "#fff",
               position: "relative",
            }}
         >
            <Box
               sx={{
                  position: "absolute",
                  top: "40%",
                  left: "50%",
                  transform: "translate(-50%,-60%)",
               }}
            >
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
                  }}
               >
                  <img src={loading} alt="Loading" />
                  <Typography color="secondary" variant="h5">
                     Loading...
                  </Typography>
               </Box>
            </Box>
         </Box>
      </Box>
   )
}
export const Loader = React.memo(Index)
