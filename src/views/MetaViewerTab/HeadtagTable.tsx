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
import EditIcon from "@mui/icons-material/Edit"
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh"
import { CustomForm } from "./CustomForm"
import { Typography } from "@mui/material"

import DeleteForeverIcon from "@mui/icons-material/DeleteForever"

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
                  {/* {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} */}
                  {open ? (
                     <AutoFixHighIcon
                        fontSize="medium"
                        color="secondary"
                        titleAccess="Edit Data"
                     />
                  ) : (
                     <EditIcon
                        sx={{ cursor: "pointer" }}
                        fontSize="medium"
                        color="secondary"
                        titleAccess="Edit Data"
                     />
                  )}
               </IconButton>
            </TableCell>
            <TableCell component="th" scope="row" sx={{ fontSize: "12px" }}>
               {row.type}
            </TableCell>
            <TableCell align="left" sx={{ fontSize: "12px" }}>
               {row.sort}
            </TableCell>
            <TableCell align="left" sx={{ fontSize: "12px" }}>
               {row.resourceZUID}
            </TableCell>
            <TableCell align="left" sx={{ fontSize: "12px" }}>
               <Box paddingLeft={4}>
                  <DeleteForeverIcon
                     sx={{ cursor: "pointer" }}
                     fontSize="medium"
                     color="secondary"
                     titleAccess="Delete Data"
                     onClick={handleDelete}
                  />
               </Box>
            </TableCell>
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
   columns: any
   data: any
   theme: any
   editHeadTags: any
   deleteHeadTags: any
   header: string
}
export const HeadTagTable = ({
   columns,
   data = [],
   theme,
   editHeadTags,
   deleteHeadTags,
   header,
}: Props) => {
   const rows = data
   return (
      <Box paddingTop={4} sx={{ display: data.length > 0 ? "block" : "none" }}>
         <Typography
            paddingBottom={4}
            sx={{
               fontSize: "24px",
               fontWeight: "bold",
               color: theme.palette.primary.main,
            }}
         >
            {header}
         </Typography>

         <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
               <TableHead>
                  <TableRow>
                     <TableCell />
                     {columns.map((e: any) => {
                        return (
                           <TableCell
                              align="left"
                              sx={{
                                 fontSize: "14px",
                                 fontWeight: "bold",
                                 textTransform: "capitalize",
                              }}
                           >
                              {e}
                           </TableCell>
                        )
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
                           handleSubmit={handleEditHeadTags}
                           handleDelete={() => handleDeleteHeadTag(row)}
                        />
                     )
                  })}
               </TableBody>
            </Table>
         </TableContainer>
      </Box>
   )
}
