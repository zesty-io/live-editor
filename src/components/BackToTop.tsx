import React from "react"
import PropTypes from "prop-types"
// import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles } from "@material-ui/core/styles"

import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Container from "@material-ui/core/Container"
import Fab from "@material-ui/core/Fab"
import Zoom from "@material-ui/core/Zoom"

const useStyles = makeStyles((theme) => ({
   root: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
   },
}))

function ScrollTop(props: any) {
   const { children } = props
   const classes = useStyles()
   const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
   })

   const handleClick = (event: any) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
         "#back-to-top-anchor",
      )

      if (anchor) {
         anchor.scrollIntoView({ behavior: "smooth", block: "center" })
      }
   }

   return (
      <Zoom in={trigger}>
         <div onClick={handleClick} role="presentation" className={classes.root}>
            {children}
         </div>
      </Zoom>
   )
}

ScrollTop.propTypes = {
   children: PropTypes.element.isRequired,
}

export default function BackToTop({ children }: any) {
   return (
      <React.Fragment>
         {/* <Toolbar id="back-to-top-anchor" /> */}
         <Container>{children}</Container>
         <ScrollTop>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
               up
            </Fab>
         </ScrollTop>
      </React.Fragment>
   )
}
