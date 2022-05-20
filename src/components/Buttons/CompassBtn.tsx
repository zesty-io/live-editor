import { withStyles } from "@material-ui/core"
import { Button } from "@mui/material"

export const CompassBtn = withStyles({
   root: {
      backgroundColor: "#1b202c",
      color: "#fff",
      "&:hover": {
         backgroundColor: "#1b202c",
         color: "#fff",
      },
   },
})(Button)
