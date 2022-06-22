import * as React from "react"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { Box, Typography } from "@mui/material"

interface Dropdown {
   label: string
   value: string
   href?: string
}
interface Props {
   list: Dropdown[]
   onChange: any
   title: string
   value: string | number
}

export const BasicMenu = ({ title = "no title", list, value, onChange }: Props) => {
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
   const open = Boolean(anchorEl)
   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation()
      setAnchorEl(event.currentTarget)
   }
   const handleClose = (data: any) => {
      setAnchorEl(null)
      onChange(data)
   }

   return (
      <Box sx={{ background: "#fff", width: "10rem" }}>
         <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ display: "flex", whiteSpace: "nowrap", alignItems: "center" }}
         >
            <Typography sx={{ fontWeight: "bold", color: "#3a3a3a" }} marginRight={1}>
               {title}:
            </Typography>
            <span>{value}</span>
         </Button>
         <Menu
            style={{ zIndex: "999999999999999999999999999999999999" }}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => handleClose("")}
            MenuListProps={{
               "aria-labelledby": "basic-button",
            }}
         >
            {list?.map((e) => {
               return (
                  <MenuItem
                     sx={{ fontSize: "14px" }}
                     onClick={() => handleClose(e.value)}
                  >
                     {e.label}
                  </MenuItem>
               )
            })}
         </Menu>
      </Box>
   )
}
