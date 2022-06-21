import { Box, Typography } from "@mui/material"
import React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

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
      { label: "H1 tags", value: h1s.length },
      { label: "H2 tags", value: h2s.length },
      { label: "H3 tags", value: h3s.length },
      { label: "H4 tags", value: h4s.length },
      { label: "H5 tags", value: h5s.length },
      { label: "H6 tags", value: h6s.length },
      { label: "P tags", value: ps.length },
      { label: "Links", value: links.length },
      { label: "Words", value: words },
      { label: "Characters", value: chars },
   ]

   const COLUMNS = ["Element", "Number of Elements in Page"]
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
         <Box>
            <BasicTable rows={contentList} columns={COLUMNS} />
         </Box>
      </Box>
   )
}
interface TPROPs {
   rows: any[]
   columns: string[]
}

function BasicTable({ rows, columns }: TPROPs) {
   return (
      <TableContainer component={Paper} sx={{ overflowX: "hidden" }}>
         <Table sx={{ minWidth: 650, overflowX: "hidden" }} aria-label="simple table">
            <TableHead>
               <TableRow>
                  {columns.map((e: any) => {
                     return (
                        <TableCell
                           align="left"
                           sx={{
                              fontWeight: "bold",
                              textTransform: "capitalize",
                              fontSize: "14px",
                           }}
                        >
                           {e}
                        </TableCell>
                     )
                  })}
               </TableRow>
            </TableHead>
            <TableBody>
               {rows.map((row: any) => (
                  <TableRow
                     key={row.label}
                     sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                     <TableCell
                        align="left"
                        component="th"
                        scope="row"
                        sx={{ fontSize: "12px" }}
                     >
                        {row.label}
                     </TableCell>
                     <TableCell align="left" scope="row" sx={{ fontSize: "12px" }}>
                        {row.value}
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   )
}
