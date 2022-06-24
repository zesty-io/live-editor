import React from "react"
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
import * as helper from "utils"
import { CellStyle, TableContainerStyle, rowStyle } from "./Styles"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { Subheaders } from "components"
import EditIcon from "@mui/icons-material/Edit"
import CancelIcon from "@mui/icons-material/Cancel"

// dom access highlight function
function activateWorkingElement(match: string): any {
   console.log("string to test", match)
   const stringToTest: string = match.replace(/<[^>]*>?/gm, "")
   const elems = document.querySelectorAll("*")
   const workingElement: any = Array.from(elems).find(
      (v) => v.textContent == stringToTest,
   )

   workingElement.style.border = "2px orange dashed"
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

   console.log(valueType)
   // @ts-ignore
   const showCloseBtn = newText === workingElement?.innerText

   const ref1 = React.useRef()
   const editElement = () => {
      // @ts-ignore
      !text && settext(ref1?.current?.innerText)
      // @ts-ignore
      !workingElement?.innerText && setWorkingElement(activateWorkingElement(value))
   }

   const saveChanges = () => {
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
                  sx={{ fontSize: "22px" }}
               >
                  {open ? (
                     <KeyboardArrowUpIcon fontSize="inherit" />
                  ) : (
                     <KeyboardArrowDownIcon fontSize="inherit" />
                  )}
               </IconButton>
            </TableCell>
            <TableCell component="th" scope="row" sx={rowStyle}>
               {keyName}
            </TableCell>
            <TableCell
               align="center"
               onClick={() => {
                  helper.scrollToView("activeEl")
               }}
            >
               <Box
                  padding={2}
                  sx={{
                     position: "relative",
                     fontSize: "14px",
                     cursor: "pointer",
                     overflow: "visible",
                     border: showCloseBtn ? `2px dashed orange` : "2px solid transparent",
                  }}
               >
                  {showCloseBtn && (
                     <Box
                        sx={{
                           fontSize: "22px",
                           position: "absolute",
                           right: "0",
                           top: "0",
                           display: "flex",
                        }}
                     >
                        <Box onClick={saveChanges} sx={{ color: "#333333" }}>
                           <CancelIcon
                              titleAccess="Save Changes"
                              color="inherit"
                              fontSize="inherit"
                           />
                        </Box>
                     </Box>
                  )}

                  <Box
                     sx={{
                        display: "flex",
                        gap: "1rem",
                        flexDirection: "row-reverse",
                        width: "100%",
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
                        <Box onClick={editElement} sx={{ fontSize: "22px" }}>
                           <EditIcon
                              fontSize="inherit"
                              color="secondary"
                              titleAccess="Edit Data"
                           />
                        </Box>
                     )}
                  </Box>
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

interface ITable {
   content: any
   metaData: any
   data: any
   url: any
   token: any
   onScroll: any
   theme: any
   getData: any
   setloading: any
   response: any
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
   response,
}: ITable) => {
   const [workingElement, setWorkingElement] = React.useState("")

   function get_elements_by_inner(key: any, val: any) {
      const res: any = []
      const elems: any = [
         // @ts-ignore
         ...document.getElementsByTagName("p"),
         // @ts-ignore
         ...document.getElementsByTagName("div"),
         // @ts-ignore
         ...document.getElementsByTagName("h1"),
         // // @ts-ignore
         // ...document.getElementsByTagName("h2"),
         // // @ts-ignore
         // ...document.getElementsByTagName("h3"),
         // // @ts-ignore
         // ...document.getElementsByTagName("h4"),
         // // @ts-ignore
         // ...document.getElementsByTagName("h5"),
         // // @ts-ignore
         // ...document.getElementsByTagName("h6"),
         // // @ts-ignore
         // ...document.getElementsByTagName("a"),
      ]
      elems.forEach((elem: any) => {
         if (elem.textContent === val) {
            const div1 = document.createElement("p")
            div1.innerText = "X"
            div1.style.position = "absolute"
            div1.style.background = "red"
            div1.style.top = "0"
            div1.style.right = "0"

            div1.onclick = async function () {
               await helper.handleEdit(metaData, url, token, {
                  [key]: elem?.innerText,
               })
            }
            // elem.setAttribute("contentEditable", true)
            // elem.style.border = "2px orange dashed"
            elem.style.position = "relative"
            elem.onmouseover = function () {
               elem.setAttribute("contentEditable", true)
               elem.style.border = "2px orange dashed"
               elem.appendChild(div1)
            }
            elem.onmouseleave = function () {
               elem.setAttribute("contentEditable", false)
               elem.style.border = "2px solid transparent"
               elem.removeChild(div1)
            }
            res.push(elem.innerText)
         }
      })
      return res
   }

   const runner = (content: any) => {
      Object.entries(content).forEach((val: any) => {
         if (typeof val[1] === "string") {
            get_elements_by_inner(val[0], val[1])
         }
      })
   }

   React.useEffect(() => {
      runner(content)
      console.log(metaData, content, 333333)
   }, [])

   return (
      <TableContainer onScroll={onScroll} component={Paper} style={TableContainerStyle}>
         <Subheaders response={response} content={content} theme={theme} />
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
                  <TableCell
                     align="center"
                     sx={{ ...CellStyle, width: "15rem", paddingLeft: "0" }}
                  >
                     Content Example
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
