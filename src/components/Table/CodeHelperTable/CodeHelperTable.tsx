import React from "react"
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
import { CellStyle, TableContainerStyle, rowStyle } from "./Styles"
import { Subheaders } from "components/BreadCrumbs"
import { urls } from "constants/index"
import { Typography } from "@mui/material"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

const TypeStyle = {
   fontSize: "14px",
   display: "flex",
   alignItems: "center",
   gap: ".3rem",
} as const

interface Props {
   keyName: string
   obj: any
   type: string
}
function Row({ keyName, obj, type }: Props) {
   const [showCopy, setShowCopy] = React.useState(false)
   const [showCopy2, setShowCopy2] = React.useState(false)
   const [showCopy3, setShowCopy3] = React.useState(false)
   const [clipboardCopy, setclipboardCopy] = React.useState(false)
   const [clipboardCopy2, setclipboardCopy2] = React.useState(false)
   const [clipboardCopy3, setclipboardCopy3] = React.useState(false)

   const theme = useTheme()

   let value = ""
   let valueType = "string"

   if (typeof obj === "string") {
      value = obj
   } else {
      valueType = "object"
   }
   console.log(valueType)
   return (
      <React.Fragment>
         <TableRow
            sx={{
               "& > *": { borderBottom: "unset" },
               fontSize: "14px",
               fontWeight: "500",
            }}
         >
            {/* Row Data  */}
            <TableCell component="th" scope="row" sx={rowStyle}>
               {keyName}
            </TableCell>
            <TableCell
               component="th"
               scope="row"
               sx={{
                  background: theme.palette.zesty.zestyDarkBlue,
                  color: theme.palette.common.white,
                  fontSize: "14px",
                  position: "relative",
               }}
            >
               {type}
            </TableCell>
            <TableCell
               component="th"
               scope="row"
               sx={{
                  background: theme.palette.zesty.zestyDarkBlue,
                  color: theme.palette.common.white,
                  fontSize: "14px",
                  position: "relative",
               }}
            >
               {value.length}
            </TableCell>
            <TableCell
               sx={{
                  background: theme.palette.zesty.zestyDarkBlue,
                  color: theme.palette.zesty.zestyGreen,
                  position: "relative",
               }}
            >
               <Button
                  onMouseEnter={() => {
                     setShowCopy(true)
                     setShowCopy2(false)
                     setShowCopy3(false)
                  }}
                  onMouseLeave={() => {
                     setShowCopy(false)
                     setShowCopy2(false)
                     setShowCopy3(false)
                     setclipboardCopy(false)
                     setclipboardCopy2(false)
                     setclipboardCopy3(false)
                  }}
                  sx={rowStyle}
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => {
                     navigator.clipboard.writeText(`{{this.${keyName}}}`)
                     setclipboardCopy(true)
                     setclipboardCopy2(false)
                     setclipboardCopy3(false)
                     setShowCopy(false)
                     setShowCopy2(false)
                     setShowCopy3(false)
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
                  {clipboardCopy && (
                     <Typography sx={TypeStyle}>
                        <CheckCircleIcon fontSize="inherit" /> Copied to clipboard!
                     </Typography>
                  )}
                  {showCopy && (
                     <Typography sx={TypeStyle}>
                        <ContentCopyIcon fontSize="inherit" /> Copy
                     </Typography>
                  )}
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
                  onMouseEnter={() => {
                     setShowCopy2(true)
                     setShowCopy3(false)
                     setShowCopy(false)
                  }}
                  onMouseLeave={() => {
                     setShowCopy(false)
                     setShowCopy2(false)
                     setShowCopy3(false)
                     setclipboardCopy(false)
                     setclipboardCopy2(false)
                     setclipboardCopy3(false)
                  }}
                  sx={rowStyle}
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => {
                     navigator.clipboard.writeText(`content.${keyName}`)
                     setclipboardCopy(false)
                     setclipboardCopy2(true)
                     setclipboardCopy3(false)
                     setShowCopy2(false)
                     setShowCopy(false)
                     setShowCopy3(false)
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
                  {clipboardCopy2 && (
                     <Typography sx={TypeStyle}>
                        {" "}
                        <CheckCircleIcon fontSize="inherit" /> Copied to clipboard!
                     </Typography>
                  )}
                  {showCopy2 && (
                     <Typography sx={TypeStyle}>
                        <ContentCopyIcon fontSize="inherit" /> Copy
                     </Typography>
                  )}
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
                  onMouseEnter={() => {
                     setShowCopy3(true)
                     setShowCopy(false)
                     setShowCopy2(false)
                  }}
                  onMouseLeave={() => {
                     setShowCopy(false)
                     setShowCopy3(false)
                     setShowCopy2(false)
                     setclipboardCopy(false)
                     setclipboardCopy2(false)
                     setclipboardCopy3(false)
                  }}
                  sx={rowStyle}
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => {
                     navigator.clipboard.writeText(`{{${keyName}}}`)
                     setclipboardCopy3(true)
                     setclipboardCopy2(false)
                     setclipboardCopy(false)
                     setShowCopy(false)
                     setShowCopy3(false)
                     setShowCopy2(false)
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
                  {clipboardCopy3 && (
                     <Typography sx={TypeStyle}>
                        <CheckCircleIcon fontSize="inherit" /> Copied to clipboard!
                     </Typography>
                  )}
                  {showCopy3 && (
                     <Typography sx={TypeStyle}>
                        <ContentCopyIcon fontSize="inherit" /> Copy
                     </Typography>
                  )}
               </Box>
            </TableCell>
         </TableRow>
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

interface ITable {
   content: any
   metaData: any
   data: any
   url: any
   token: any
   onScroll: any
   theme: any
   response: any
   fields: any[]
}
export const CodeHelperTable = ({
   content,
   data = {},
   onScroll,
   theme,
   response,
   fields,
}: ITable) => {
   const filterData = Object.keys(data).filter((e: any) => {
      return e !== "meta" && e !== "status"
   })
   return (
      <TableContainer onScroll={onScroll} component={Paper} style={TableContainerStyle}>
         <Subheaders
            response={response}
            theme={theme}
            content={content}
            btnList={btnList}
         />
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
                  <TableCell variant="head" sx={CellStyle}>
                     Type
                  </TableCell>
                  <TableCell variant="head" sx={CellStyle}>
                     Char length
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
               {filterData?.map((keyName: any) => {
                  const type = fields?.find((e: any) => e.name === keyName)?.datatype
                  return <Row type={type} obj={data && data[keyName]} keyName={keyName} />
               })}
            </TableBody>
         </Table>
      </TableContainer>
   )
}
