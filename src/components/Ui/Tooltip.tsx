import ReactTooltip from "react-tooltip"
import React from "react"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"
interface Props {
   text: string
   name: string
}

const infoStyle = `
.extraClass {
    width: 15rem;
    font-size: 12px !important;
    pointer-events: auto !important;
 &:hover {
    visibility: visible !important;
    opacity: 1 !important;
 }
}
`
export const Tooltip = ({ text, name }: Props) => {
   return (
      <div
         className="side"
         style={{
            transform: "translate3d(5px, 5px, 5px)",
            display: "block",
            alignItems: "center",
         }}
      >
         <a data-tip data-for={name}>
            <HelpOutlineIcon fontSize="small" color="secondary" />
         </a>
         <ReactTooltip
            className="extraClass"
            id={name}
            place="right"
            type="info"
            effect="float"
         >
            {text}
            <style>{infoStyle}</style>
         </ReactTooltip>
      </div>
   )
}
