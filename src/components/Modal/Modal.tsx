import { Box } from "@mui/material"
import React from "react"
interface Props {
   onClose: () => any
   children: React.ReactNode
}
export const Modal = ({ onClose, children }: Props) => {
   console.log(onClose)
   const handleClose = (e: any) => {
      e.stopPropagation()
      onClose()
   }
   return (
      <Box
         sx={{
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "2147483646",
            height: "100%",
            width: "100%",
            background: "rgba(1,2,3,.1)",
         }}
      >
         <Box
            sx={{
               display: "flex",
               justifyItems: "center",
               flexDirection: "column",
               height: "100%",
               width: "100%",
               background: "rgba(1,2,3,.1)",
               position: "relative",
            }}
            onClick={handleClose}
         >
            <Box
               sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
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
                  {children}
               </Box>
            </Box>
         </Box>
      </Box>
   )
}
