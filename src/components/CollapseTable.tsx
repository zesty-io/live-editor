import * as React from "react"
import Box from "@mui/material/Box"
import Collapse from "@mui/material/Collapse"
import IconButton from "@mui/material/IconButton"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { PrettyPrintJson } from "utils"
import { useTheme } from "@mui/system"

function Row({ keyName, obj }: any) {
   const [showCopy, setShowCopy] = React.useState(false)
   const [clipboardCopy, setclipboardCopy] = React.useState(false)
   const [open, setOpen] = React.useState(false)
   const theme = useTheme()
   let value = ""
   let valueType = "string"

   if (typeof obj === "string") {
      value = obj
   } else {
      valueType = "object"
   }

   console.log(obj, keyName, 11111111111111111111111111)
   return (
      <React.Fragment>
         <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
            {/* Row Data  */}
            <TableCell sx={{ width: "1rem" }}>
               <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
               >
                  {open ? <span>⬆️</span> : <span>⬇️</span>}
               </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
               {keyName}
            </TableCell>
            <TableCell align="left">{valueType}</TableCell>
            <TableCell align="left">{value}</TableCell>
            <TableCell align="left">{value.length}</TableCell>
            <TableCell
               onMouseEnter={() => setShowCopy(true)}
               onMouseLeave={() => {
                  setShowCopy(false)
                  setclipboardCopy(false)
               }}
               sx={{
                  background: theme.palette.zesty.zestyDarkBlue,
                  color: theme.palette.zesty.zestyGreen,
                  position: "relative",
               }}
            >
               <button
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                     navigator.clipboard.writeText(`content.${keyName}`)
                     setclipboardCopy(true)
                     setShowCopy(false)
                  }}
               >
                  {`{content.${keyName}}`}
               </button>
               <Box
                  sx={{
                     position: "absolute",
                     left: "0",
                     top: "0",
                  }}
               >
                  {clipboardCopy && <span>✅ Copied to clidboard!</span>}
                  {showCopy && <span>📜 Copy!</span>}
               </Box>
            </TableCell>
         </TableRow>

         {/* Expanded Data */}
         <TableRow>
            <TableCell
               style={{
                  paddingBottom: 0,
                  paddingTop: 0,
                  background: theme.palette.zesty.zestyBackgroundBlue,
               }}
               colSpan={6}
            >
               <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 1 }}>
                     <Table
                        sx={{
                           [`& .${tableCellClasses.root}`]: {
                              borderBottom: "none",
                           },
                        }}
                        size="medium"
                        aria-label="purchases"
                     >
                        <TableHead>
                           <TableRow>
                              <TableCell>{PrettyPrintJson({ data: obj })}</TableCell>
                           </TableRow>
                        </TableHead>
                     </Table>
                  </Box>
               </Collapse>
            </TableCell>
         </TableRow>
      </React.Fragment>
   )
}

export default function CollapsibleTable({ data = {} }: any) {
   return (
      <TableContainer component={Paper} style={{ maxHeight: 600 }}>
         <Table aria-label="collapsible table" stickyHeader>
            {/* HEaders */}
            <TableHead>
               <TableRow>
                  <TableCell />
                  <TableCell variant="head" sx={{ width: "3rem" }}>
                     <strong>Field Name</strong>
                  </TableCell>
                  <TableCell align="left" sx={{ width: "3rem" }}>
                     <strong>Type</strong>
                  </TableCell>
                  <TableCell align="left" sx={{ width: "20rem" }}>
                     <strong>Content Example</strong>
                  </TableCell>
                  <TableCell align="left" sx={{ width: "3rem" }}>
                     <strong>Content Length</strong>
                  </TableCell>
                  <TableCell align="left" sx={{ width: "3rem" }}>
                     <strong>Access Example</strong>
                  </TableCell>
               </TableRow>
            </TableHead>

            {/* Table Row main  */}
            <TableBody>
               {Object.keys(data)?.map((keyName: any) => (
                  <Row obj={data && data[keyName]} keyName={keyName} />
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   )
}
