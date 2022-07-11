import styled from "@emotion/styled"
import { withStyles } from "@material-ui/core"
import { Button } from "@mui/material"
import { assets } from "constants/index"
import React from "react"
import "./LaunchBtn.css"

export const LaunchBtnStyle = withStyles({
   root: {
      backgroundColor: "#1b202c",
      color: "#fff",
      "&:hover": {
         backgroundColor: "#1b202c",
         color: "#fff",
      },
   },
})(Button)

interface Props {
   onClick: any
}

const Pulse = styled.button`
   display: flex;
   border-radius: 5px;
   background: #1b202c;
   cursor: pointer;
   padding: 12px 24px 12px 16px;
   box-shadow: 0 0 0 rgba(232, 152, 13, 0.4);
   animation: pulse 1s infinite ease-in-out;
   justify-items: center;
   text-align: center;
   justify-content: center;
   align-items: center;
   border: 1px #5b667d solid;
   opacity: 1;
   position: absolute;
   left: 40vw;
   bottom: 0;
`
export const LaunchBtn = ({ onClick }: Props) => {
   return (
      <Pulse className="pulse" onClick={onClick}>
         <img src={assets.zestyLogo} width="32px" height="32px" alt="Zesty.io Logo" />
      </Pulse>
   )
}
