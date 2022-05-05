import * as React from "react"
import Box from "@mui/material/Box"
import Collapse from "@mui/material/Collapse"
import IconButton from "@mui/material/IconButton"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import Button from "@mui/material/Button"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { PrettyPrintJson } from "utils"
import { useTheme } from "@mui/system"
import CloseIcon from "@mui/icons-material/Close"

// dom access highlight function
function activateWorkingElement(match: string): any {
   console.log("string to test", match)
   let stringToTest: string = match.replace(/<[^>]*>?/gm, "")
   let elems = document.querySelectorAll("*")
   let workingElement: any = Array.from(elems).find((v) => v.textContent == stringToTest)

   workingElement.style.border = "2px orange solid"
   workingElement.setAttribute("contentEditable", true)
   console.log("Activating", workingElement)

   return workingElement
}

function deactivateWorkingElement(workingElement: any): any {
   if (undefined !== workingElement) {
      console.log("Deactivating", workingElement)
      workingElement.style.border = "none"
      workingElement.setAttribute("contentEditable", false)
   }
}

// 1 edit at a time
// when click it should scroll to the div
// fetchwrapper verify if user is login
// make edit in api
interface Props {
   keyName: string
   obj: any
   workingElement: string
   setWorkingElement: (e: string) => void
}

function Row({ keyName, obj, workingElement, setWorkingElement }: Props) {
   const [showCopy, setShowCopy] = React.useState(false)
   const [clipboardCopy, setclipboardCopy] = React.useState(false)
   const [showEditClose, setShowEditClose] = React.useState(false)
   const [open, setOpen] = React.useState(false)
   const [text, settext] = React.useState("")

   const theme = useTheme()
   let value = ""
   let valueType = "string"

   React.useEffect(() => {
      console.log(workingElement, "WORKING ELEMENT")
   }, [workingElement])

   if (typeof obj === "string") {
      value = obj
   } else {
      valueType = "object"
   }
   console.log(showEditClose)
   // @ts-ignore
   const showBtn = text === workingElement?.innerText

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
            <TableCell align="left">
               <span
                  onClick={(e: any) => {
                     !text && settext(e.target.textContent)
                     // @ts-ignore
                     !workingElement?.innerText &&
                        setWorkingElement(activateWorkingElement(value))
                     setShowEditClose(true)
                  }}
               >
                  {value}
               </span>
               {showBtn && (
                  <Button
                     size="small"
                     onClick={() => {
                        setShowEditClose(false)
                        deactivateWorkingElement(workingElement)
                        setWorkingElement("")
                        settext("")
                     }}
                  >
                     <CloseIcon />
                  </Button>
               )}
            </TableCell>
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
                  {clipboardCopy && <span>✅ Copied to clipboard!</span>}
                  {showCopy && <span>📜 Copy</span>}
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
   const [workingElement, setWorkingElement] = React.useState("")
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
                  <Row
                     obj={data && data[keyName]}
                     keyName={keyName}
                     workingElement={workingElement}
                     setWorkingElement={setWorkingElement}
                  />
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   )
}
