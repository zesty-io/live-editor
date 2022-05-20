import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { Button } from "@mui/material"

const StyledButton = withStyles({
   root: {
      fontSize: "14px",
      "&:hover": {
         color: "#fff",
      },
   },
})(Button)

interface Props {
   children: React.ReactNode
   href?: string
}
export const NormalBtn = ({
   children,
   href = `https://accounts.zesty.io/login`,
}: Props) => {
   return (
      <StyledButton href={href} size="small" variant="contained" color="secondary">
         {children}
      </StyledButton>
   )
}
