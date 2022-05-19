import * as React from "react"
import Box from "@mui/material/Box"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import Button from "@mui/material/Button"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { useTheme } from "@mui/system"
import { CellStyle, TableContainerStyle } from "./Styles"
import { Subheaders } from "components/BreadCrumbs"
import { urls } from "constants"

function Row({ keyName }: any) {
   const [showCopy, setShowCopy] = React.useState(false)
   const [clipboardCopy, setclipboardCopy] = React.useState(false)

   const theme = useTheme()

   return (
      <React.Fragment>
         <TableRow
            sx={{
               "& > *": { borderBottom: "unset" },
               fontSize: "12px",
               fontWeight: "500",
            }}
         >
            {/* Row Data  */}
            <TableCell component="th" scope="row">
               {keyName}
            </TableCell>
            <TableCell
               sx={{
                  background: theme.palette.zesty.zestyDarkBlue,
                  color: theme.palette.zesty.zestyGreen,
                  position: "relative",
               }}
            >
               <Button
                  onMouseEnter={() => setShowCopy(true)}
                  onMouseLeave={() => {
                     setShowCopy(false)
                     setclipboardCopy(false)
                  }}
                  sx={{ cursor: "pointer" }}
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={() => {
                     navigator.clipboard.writeText(`{{this.${keyName}}}`)
                     setclipboardCopy(true)
                     setShowCopy(false)
                  }}
               >
                  {`{{this.${keyName}}}`}
               </Button>
               <Box
                  sx={{
                     position: "absolute",
                     left: "0",
                     top: "0",
                  }}
               >
                  {clipboardCopy && <span>✅ Copied to clipboard!</span>}
                  {showCopy && <span>📜 Copy</span>}
               </Box>
            </TableCell>
            <TableCell
               sx={{
                  background: theme.palette.zesty.zestyDarkBlue,
                  color: theme.palette.zesty.zestyGreen,
                  position: "relative",
               }}
            >
               <Button
                  onMouseEnter={() => setShowCopy(true)}
                  onMouseLeave={() => {
                     setShowCopy(false)
                     setclipboardCopy(false)
                  }}
                  sx={{ cursor: "pointer" }}
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={() => {
                     navigator.clipboard.writeText(`content.${keyName}`)
                     setclipboardCopy(true)
                     setShowCopy(false)
                  }}
               >
                  {`{content.${keyName}}`}
               </Button>
               <Box
                  sx={{
                     position: "absolute",
                     left: "0",
                     top: "0",
                  }}
               >
                  {clipboardCopy && <span>✅ Copied to clipboard!</span>}
                  {showCopy && <span>📜 Copy</span>}
               </Box>
            </TableCell>
            <TableCell
               sx={{
                  background: theme.palette.zesty.zestyDarkBlue,
                  color: theme.palette.zesty.zestyGreen,
                  position: "relative",
               }}
            >
               <Button
                  onMouseEnter={() => setShowCopy(true)}
                  onMouseLeave={() => {
                     setShowCopy(false)
                     setclipboardCopy(false)
                  }}
                  sx={{ cursor: "pointer" }}
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={() => {
                     navigator.clipboard.writeText(`{{${keyName}}}`)
                     setclipboardCopy(true)
                     setShowCopy(false)
                  }}
               >
                  {`{{${keyName}}}`}
               </Button>
               <Box
                  sx={{
                     position: "absolute",
                     left: "0",
                     top: "0",
                  }}
               >
                  {clipboardCopy && <span>✅ Copied to clipboard!</span>}
                  {showCopy && <span>📜 Copy</span>}
               </Box>
            </TableCell>
         </TableRow>

         {/* Expanded Data */}
         {/* <TableRow>
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
         </TableRow> */}
      </React.Fragment>
   )
}

const btnList = [
   {
      name: "Parsely Docs",
      label: "Parsely Docs",
      value: "Parsely Docs",
      href: urls.parselyDocs,
   },
   {
      name: "Next Js Docs",
      label: "Next Js Docs",
      value: "Next Js Docs",
      href: urls.nextJsDocs,
   },
]

export const CodeHelperTable = ({
   content,
   metaData,
   data = {},
   url,
   token,
   onScroll,
   theme,
}: any) => {
   const [workingElement, setWorkingElement] = React.useState("")

   return (
      <TableContainer onScroll={onScroll} component={Paper} style={TableContainerStyle}>
         <Subheaders theme={theme} content={content} btnList={btnList} />
         <Table aria-label="collapsible table">
            {/* HEaders */}
            <TableHead
               sx={{
                  backgroundColor: theme.palette.zesty.zestyOrange,
               }}
            >
               <TableRow>
                  <TableCell variant="head" sx={CellStyle}>
                     Reference Name
                  </TableCell>
                  <TableCell align="left" sx={CellStyle}>
                     Parsely Example
                  </TableCell>
                  <TableCell align="left" sx={CellStyle}>
                     JSX Example
                  </TableCell>
                  <TableCell align="left" sx={CellStyle}>
                     VUE Example
                  </TableCell>
               </TableRow>
            </TableHead>

            {/* Table Row main  */}
            <TableBody>
               {Object.keys(data)?.map((keyName: any) => (
                  <Row
                     obj={data && data[keyName]}
                     keyName={keyName}
                     workingElement={workingElement}
                     setWorkingElement={setWorkingElement}
                     metaData={metaData}
                     url={url}
                     token={token}
                  />
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   )
}
