import React from "react"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { Fab, Zoom } from "@mui/material"
interface Props {
   scrollPos: number
   id?: string
}

export const GotoTopBtn = ({ scrollPos, id = "#gotoTop" }: Props) => {
   console.log(id)
   return (
      <Zoom in={scrollPos >= 200 ? true : false}>
         <Fab
            sx={{ position: "absolute", bottom: "0.5rem", right: "0.5rem" }}
            color="secondary"
            size="small"
            aria-label="gotoTop"
            href={id}
         >
            <KeyboardArrowUpIcon />
         </Fab>
      </Zoom>
   )
}
