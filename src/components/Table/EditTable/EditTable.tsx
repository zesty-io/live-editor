import React from "react"
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
import * as helper from "utils"
import { CellStyle, TableContainerStyle, rowStyle } from "./Styles"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { Subheaders } from "components"
import EditIcon from "@mui/icons-material/Edit"

// dom access highlight function
function activateWorkingElement(match: string): any {
   console.log("string to test", match)
   const stringToTest: string = match.replace(/<[^>]*>?/gm, "")
   const elems = document.querySelectorAll("*")
   const workingElement: any = Array.from(elems).find(
      (v) => v.textContent == stringToTest,
   )

   workingElement.style.border = "2px orange solid"
   workingElement.setAttribute("contentEditable", true)
   workingElement.setAttribute("id", "activeEl")
   console.log("Activating", workingElement)

   return workingElement
}

const deactivateWorkingElement = async (
   workingElement: any,
   keyName: string,
   metaData: string,
   url: string | any,
   token: string | any,
   save: boolean,
   getData: any,
) => {
   if (undefined !== workingElement) {
      // @ts-ignore
      save &&
         (await helper.handleEdit(metaData, url, token, {
            [`${keyName}`]: workingElement?.innerText,
         }))
      await getData()
      // save && (await window.location.reload())
      console.log("Deactivating", workingElement)
      workingElement.style.border = "none"
      workingElement.setAttribute("contentEditable", false)
      workingElement.removeAttribute("id")
   }
}

interface Props {
   keyName: string
   obj: any
   workingElement: string
   setWorkingElement: (e: string) => void
   metaData: any
   url: any
   token: any
   setloading: any
   getData: any
}

function Row({
   keyName,
   obj,
   workingElement,
   setWorkingElement,
   metaData,
   url,
   token,
   setloading,
   getData,
}: Props) {
   const [open, setOpen] = React.useState(false)
   const [text, settext] = React.useState("")

   const theme = useTheme()
   let value = ""
   let valueType = "string"

   if (typeof obj === "string") {
      value = obj
   } else {
      valueType = "object"
   }

   const newText = text.replace(/<[^>]*>?/gm, "")

   // @ts-ignore
   const showCloseBtn = newText === workingElement?.innerText

   const ref1 = React.useRef()
   const editElement = () => {
      // @ts-ignore
      !text && settext(ref1?.current?.innerText)
      // @ts-ignore
      !workingElement?.innerText && setWorkingElement(activateWorkingElement(value))
   }
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
            <TableCell sx={{ width: "1rem" }}>
               <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
               >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
               </IconButton>
            </TableCell>
            <TableCell component="th" scope="row" sx={rowStyle}>
               {keyName}
            </TableCell>
            <TableCell align="left" sx={rowStyle}>
               {valueType}
            </TableCell>
            <TableCell
               sx={rowStyle}
               align="left"
               onClick={() => {
                  helper.scrollToView("activeEl")
               }}
            >
               <Box sx={{}}>
                  {showCloseBtn && (
                     <Box
                        sx={{
                           display: "flex",
                           gap: "1rem",
                           justifyContent: "center",
                           justifyItems: "center",
                        }}
                     >
                        <Button
                           size="small"
                           onClick={() => {
                              deactivateWorkingElement(
                                 workingElement,
                                 keyName,
                                 metaData,
                                 url,
                                 token,
                                 false,
                                 getData,
                              )
                              setWorkingElement("")
                              settext("")
                              setloading()
                           }}
                           sx={{
                              fontSize: "16px",
                              borderRadius: "50%",
                              color: theme.palette.zesty.zestyOrange,
                           }}
                        >
                           <CloseIcon fontSize="inherit" />
                        </Button>

                        <Button
                           size="small"
                           onClick={() => {
                              deactivateWorkingElement(
                                 workingElement,
                                 keyName,
                                 metaData,
                                 url,
                                 token,
                                 true,
                                 getData,
                              )
                              setloading()
                              setWorkingElement("")
                              settext("")
                           }}
                           sx={{
                              color: theme.palette.zesty.zestyOrange,
                              fontSize: "16px",
                              borderRadius: "50%",
                           }}
                        >
                           Save
                        </Button>
                     </Box>
                  )}
               </Box>
               <Box
                  sx={{
                     display: "flex",
                     gap: "1rem",
                     flexDirection: "row-reverse",
                     width: "15rem",
                     maxHeight: "10rem",
                     wordBreak: "break-word",
                     overflow: "auto",
                     justifyContent: "start",
                     justifyItems: "start",
                     textAlign: "left",
                  }}
               >
                  <Box ref={ref1}>{value}</Box>
                  {!showCloseBtn && value && (
                     <Box onClick={editElement} sx={{}}>
                        <EditIcon
                           fontSize="medium"
                           color="secondary"
                           titleAccess="Edit Data"
                        />
                     </Box>
                  )}
               </Box>
            </TableCell>
            <TableCell align="left" sx={rowStyle}>
               {value.length}
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
                              <TableCell sx={rowStyle}>
                                 {PrettyPrintJson({ data: obj })}
                              </TableCell>
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

export const EditTable = ({
   content,
   metaData,
   data = {},
   url,
   token,
   onScroll,
   theme,
   getData,
   setloading,
}: any) => {
   const [workingElement, setWorkingElement] = React.useState("")

   return (
      <TableContainer onScroll={onScroll} component={Paper} style={TableContainerStyle}>
         <Subheaders content={content} theme={theme} />
         <Table aria-label="collapsible table">
            {/* HEaders */}
            <TableHead
               sx={{
                  backgroundColor: theme.palette.zesty.zestyOrange,
               }}
            >
               <TableRow>
                  <TableCell />
                  <TableCell variant="head" sx={CellStyle}>
                     Field Name
                  </TableCell>
                  <TableCell align="left" sx={CellStyle}>
                     Type
                  </TableCell>
                  <TableCell align="left" sx={{ ...CellStyle, width: "15rem" }}>
                     Content Example
                  </TableCell>
                  <TableCell align="left" sx={CellStyle}>
                     Content Length
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
                     getData={getData}
                     setloading={setloading}
                  />
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   )
}
