import styled from "@emotion/styled"
import { Box } from "@mui/material"
import React from "react"

export const CustomInput = styled.input`
   padding: 0.6rem 2rem 0.6rem 2.3rem;
   overflow: hidden;
   background: ${(props: any) => props.theme.white};
   width: 100%;
   margin-bottom: 0.5rem;
   border-radius: 5px;
   border: 1px solid ${(props: any) => props.theme.border};
   outline: none;
   cursor: pointer;
   color: ${(props: any) => props.theme.main};
   font-size: 15px;
   transition: all 0.1s ease-in-out;
   &:focus {
      border: 1px solid ${(props: any) => props.theme.main};
      box-shadow: 0px 0px 0px 4px ${(props: any) => props.theme.boxShadow};
   }
   &:hover {
      border: 1px solid ${(props: any) => props.theme.main};
      box-shadow: 0px 0px 0px 4px ${(props: any) => props.theme.boxShadow};
   }
`

const Index = ({ label, theme, value, onChange, placeholder, autoFocus }: any) => {
   return (
      <Box
         marginBottom={2}
         sx={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            textAlign: "left",
            padingLeft: ".5rem",
         }}
      >
         <Box paddingLeft={2} sx={{ fontWeight: "bold", textTransform: "capitalize" }}>
            {label}
         </Box>
         <CustomInput
            theme={theme}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            autoFocus={autoFocus}
         />
      </Box>
   )
}

export const MainInput = React.memo(Index)
