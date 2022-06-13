import * as React from "react"
import Box from "@mui/material/Box"
import Collapse from "@mui/material/Collapse"
import IconButton from "@mui/material/IconButton"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { CustomForm } from "./CustomForm"

function Row(props: any) {
   const { row, theme, handleSubmit, handleDelete } = props
   const [open, setOpen] = React.useState(false)

   return (
      <React.Fragment>
         <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
            <TableCell>
               <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
               >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
               </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
               {row.type}
            </TableCell>
            <TableCell align="left">{row.sort}</TableCell>
            <TableCell align="left">{row.resourceZUID}</TableCell>
            <TableCell align="left">delete</TableCell>
         </TableRow>
         <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
               <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 1 }}>
                     <CustomForm
                        data={row.attributes}
                        theme={theme}
                        handleSubmit={handleSubmit}
                        handleDelete={handleDelete}
                     />
                  </Box>
               </Collapse>
            </TableCell>
         </TableRow>
      </React.Fragment>
   )
}

interface Props {
   columns: string[]
   data: any
   theme: any
   editHeadTags: any
   deleteHeadTags: any
}
export const HeadTagTable = ({
   columns,
   data = [],
   theme,
   editHeadTags,
   deleteHeadTags,
}: Props) => {
   const rows = data
   return (
      <TableContainer component={Paper}>
         <Table aria-label="collapsible table">
            <TableHead>
               <TableRow>
                  <TableCell />
                  {columns.map((e: string) => {
                     return <TableCell align="left">{e}</TableCell>
                  })}
               </TableRow>
            </TableHead>
            <TableBody>
               {rows?.map((row: any) => {
                  const handleEditHeadTags = async (data: any) => {
                     const newData = { ...row, attributes: data }
                     await editHeadTags(newData)
                  }
                  const handleDeleteHeadTag = async (data: any) => {
                     await deleteHeadTags(data)
                  }
                  return (
                     <Row
                        key={row?.ZUID}
                        row={row}
                        theme={theme}
                        handleSubmit={() => handleEditHeadTags(row)}
                        handleDelete={() => handleDeleteHeadTag(row)}
                     />
                  )
               })}
            </TableBody>
         </Table>
      </TableContainer>
   )
}
