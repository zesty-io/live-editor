import * as React from "react"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { Box } from "@mui/material"

interface Dropdown {
   label: string
   name: string
   href: string
}
interface Props {
   list: Dropdown[]
}
export const BasicMenu = ({ list }: Props) => {
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
   const open = Boolean(anchorEl)
   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = (href: any) => {
      setAnchorEl(null)
      href && window.open(href, "_blank")
   }

   return (
      <Box sx={{ background: "#fff" }}>
         <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
         >
            Manager Links
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
            {list.map((e) => {
               return (
                  <MenuItem sx={{}} onClick={() => handleClose(e.href)}>
                     {e.label}
                  </MenuItem>
               )
            })}
         </Menu>
      </Box>
   )
}
