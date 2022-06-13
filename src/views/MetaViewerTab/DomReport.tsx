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
   const h1s = document.getElementsByTagName("h1")
   const h2s = document.getElementsByTagName("h2")
   const h3s = document.getElementsByTagName("h3")
   const h4s = document.getElementsByTagName("h4")
   const h5s = document.getElementsByTagName("h5")
   const h6s = document.getElementsByTagName("h6")
   const ps = document.getElementsByTagName("p")
   const links = document.getElementsByTagName("a")
   const words =
      wordCount(document.getElementsByTagName("h1")) +
      wordCount(document.getElementsByTagName("h2")) +
      wordCount(document.getElementsByTagName("h3")) +
      wordCount(document.getElementsByTagName("h4")) +
      wordCount(document.getElementsByTagName("h5")) +
      wordCount(document.getElementsByTagName("h6")) +
      wordCount(document.getElementsByTagName("p")) +
      wordCount(document.getElementsByTagName("a"))
   const chars = wordCount(document.getElementsByTagName("body"))

   const contentList = [
      { label: "Number of H1 tags:", value: h1s.length },
      { label: "Number of H2 tags:", value: h2s.length },
      { label: "Number of H3 tags:", value: h3s.length },
      { label: "Number of H4 tags:", value: h4s.length },
      { label: "Number of H5 tags:", value: h5s.length },
      { label: "Number of H6 tags:", value: h6s.length },
      { label: "Number of P tags:", value: ps.length },
      { label: "Number of links:", value: links.length },
      { label: "Number of words:", value: words },
      { label: "Number of characters:", value: chars },
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
               display: "flex",
               justifyContent: "space-between",
               flexWrap: "wrap",
               width: "100%",
               textAlign: "left",
            }}
         >
            {contentList.map((e: any) => {
               return (
                  <Box
                     sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        textAlign: "left",
                        justifyContent: "start",
                        justifyItems: "left",
                        width: "15rem",
                     }}
                  >
                     <Typography
                        paddingBottom={2}
                        sx={{
                           fontSize: "14px",
                           fontWeight: "400",
                           color: theme.palette.common.black,
                           textAlign: "left",
                        }}
                     >
                        {e.label}
                     </Typography>
                     <Typography
                        paddingBottom={2}
                        sx={{
                           fontSize: "22px",
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
