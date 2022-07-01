import * as React from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import { CustomBtn } from "components"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import { Box, Typography } from "@mui/material"
import AddLocationIcon from "@mui/icons-material/AddLocation"
import { getPathFromUrl } from "utils"

const columns: any = [
   { id: "title", label: "Page Title", minWidth: 170 },
   { id: "path", label: "Path", minWidth: 100 },
   { id: "  ", label: "  ", minWidth: 100 },
]

interface IProps {
   data: any
   theme: any
   search: string
}

export const NavTable = ({ data, theme, search }: IProps) => {
   console.log(data, 2222)
   const [page, setPage] = React.useState(0)
   const [rowsPerPage, setRowsPerPage] = React.useState(10)

   const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage)
   }

   React.useEffect(() => {
      setPage(0)
   }, [search])

   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value)
      setPage(0)
   }

   const CellStyle = {
      width: "3rem",
      fontSize: "14px",
      fontWeight: "800",
      color: "#fff",
      whiteSpace: "nowrap",
      backgroundColor: theme.palette.zesty.zestyOrange,
   } as const

   const rows = data

   return (
      <Paper
         sx={{
            width: "100%",
            overflow: "auto",
         }}
      >
         <TableContainer sx={{ height: "53vh" }}>
            <Table stickyHeader aria-label="sticky table">
               <TableHead
                  sx={{
                     backgroundColor: theme.palette.zesty.zestyOrange,
                  }}
               >
                  <TableRow>
                     {columns.map((column: any) => (
                        <TableCell key={column.id} align={column.align} style={CellStyle}>
                           {column.label}
                        </TableCell>
                     ))}
                  </TableRow>
               </TableHead>
               <TableBody>
                  {rows
                     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                     .map((row: any) => {
                        const isCurrentPage =
                           (row?.item?.url || row?.url) ===
                           getPathFromUrl(window.location.href)
                              ? true
                              : false
                        return (
                           <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                              <TableCell
                                 align="left"
                                 component="th"
                                 scope="row"
                                 sx={{
                                    fontWeight: isCurrentPage ? "bold" : "500",
                                    fontSize: "12px",
                                    width: "20rem",
                                    color: isCurrentPage
                                       ? theme.palette.zesty.zestyOrange
                                       : theme.palette.common.black,
                                 }}
                              >
                                 {row?.item?.title || row?.title}
                              </TableCell>
                              <TableCell
                                 align="left"
                                 scope="row"
                                 sx={{
                                    fontWeight: isCurrentPage ? "bold" : "500",
                                    fontSize: "12px",
                                    width: "20rem",
                                    color: isCurrentPage
                                       ? theme.palette.zesty.zestyOrange
                                       : theme.palette.common.black,
                                 }}
                              >
                                 {row?.item?.path_part || row?.path_part}
                              </TableCell>
                              <TableCell
                                 align="center"
                                 scope="row"
                                 sx={{
                                    fontSize: "12px",
                                 }}
                              >
                                 {!isCurrentPage ? (
                                    <CustomBtn
                                       title={row?.item?.title || row?.title}
                                       size="14px"
                                       theme={theme}
                                       onClick={() =>
                                          window.open(row?.item?.url || row?.url, "")
                                       }
                                    >
                                       Visit Page <OpenInNewIcon fontSize="inherit" />
                                    </CustomBtn>
                                 ) : (
                                    <Box
                                       sx={{
                                          display: "flex",
                                          alignItems: "center",
                                          gap: ".5rem",
                                          fontSize: "22px",

                                          color: isCurrentPage
                                             ? theme.palette.zesty.zestyOrange
                                             : theme.palette.common.black,
                                       }}
                                    >
                                       <Typography
                                          sx={{
                                             fontSize: "14px",
                                             fontWeight: "bold",
                                             whiteSpace: "nowrap",
                                          }}
                                       >
                                          You are here
                                       </Typography>
                                       <AddLocationIcon fontSize="inherit" />
                                    </Box>
                                 )}
                              </TableCell>
                           </TableRow>
                        )
                     })}
               </TableBody>
            </Table>
         </TableContainer>
         <TablePagination
            sx={{ fontSize: "14px" }}
            rowsPerPageOptions={[]}
            // rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
         />
      </Paper>
   )
}
