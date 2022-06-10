import { Box, Typography } from "@mui/material"
import React from "react"

function wordCount(elements: any) {
   let count = 0
   for (let i = 0; i < elements.length; i++) {
      count += elements[i].textContent.split(/\s/).length
   }
   return count
}

export const DomReport = ({ theme }: any) => {
   const h1s = document.getElementsByTagName("h1").length
   const links = document.getElementsByTagName("a").length
   const words = wordCount(document.getElementsByTagName("body"))

   const contentList = [
      { label: "Number of H1 tags:", value: h1s },
      { label: "Number of words:", value: words },
      { label: "Number of links:", value: links },
   ]

   return (
      <Box paddingTop={4}>
         <Typography
            paddingBottom={4}
            sx={{
               fontSize: "24px",
               fontWeight: "bold",
               color: theme.palette.primary.main,
            }}
         >
            DOM Report
         </Typography>
         <Box
            borderRadius={4}
            padding={4}
            boxShadow={1}
            sx={{
               backgroundColor: theme.palette.alternate.main,
            }}
         >
            {contentList.map((e: any) => {
               return (
                  <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                     <Typography
                        paddingBottom={2}
                        sx={{
                           fontSize: "18px",
                           fontWeight: "400",
                           color: theme.palette.common.black,
                        }}
                     >
                        {e.label}
                     </Typography>
                     <Typography
                        paddingBottom={2}
                        sx={{
                           fontSize: "26px",
                           fontWeight: "bold",
                           color: theme.palette.primary.main,
                        }}
                     >
                        {e.value}
                     </Typography>
                  </Box>
               )
            })}
         </Box>
      </Box>
   )
}
