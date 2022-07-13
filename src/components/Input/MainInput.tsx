import styled from "@emotion/styled"
import { Box, Typography } from "@mui/material"
import React from "react"

export const CustomInput = styled.input`
   box-sizing: border-box;
   padding: 0.6rem 2rem 0.6rem 1rem;
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
   &:disabled {
      opacity: 0.8;
      cursor: not-allowed;
      border: 1px solid ${(props: any) => props.theme.border};
      caret-color: transparent;
   }
   &:hover:enabled {
      border: 1px solid ${(props: any) => props.theme.main};
      box-shadow: 0px 0px 0px 4px ${(props: any) => props.theme.boxShadow};
   }
`
export const CustomTextArea = styled.textarea`
   box-sizing: border-box;
   padding: 0.6rem 2rem 0.6rem 1rem;
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
   &:disabled {
      opacity: 0.8;
      cursor: not-allowed;
      border: 1px solid ${(props: any) => props.theme.border};
      caret-color: transparent;
   }
   &:hover:enabled {
      border: 1px solid ${(props: any) => props.theme.main};
      box-shadow: 0px 0px 0px 4px ${(props: any) => props.theme.boxShadow};
   }
`

interface Props {
   label?: string
   theme: any
   value: string
   onChange: (e: any) => void
   placeholder?: string
   autoFocus?: boolean
   required?: boolean
   name?: string
   disabled?: boolean
   textArea?: boolean
   key?: number | string
}
const Index = ({
   required,
   label,
   theme,
   value,
   onChange,
   placeholder,
   autoFocus,
   name,
   disabled,
   key,
   textArea = false,
}: Props) => {
   console.log(required)

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
         <Typography
            paddingLeft={2}
            sx={{ fontWeight: "bold", textTransform: "capitalize", fontSize: "14px" }}
         >
            {label}
         </Typography>
         {!textArea ? (
            <CustomInput
               type="text"
               key={key}
               disabled={disabled}
               name={name}
               theme={theme}
               value={value}
               onChange={onChange}
               placeholder={placeholder}
               autoFocus={autoFocus}
            />
         ) : (
            <CustomTextArea
               rows={5}
               cols={10}
               key={key}
               disabled={disabled}
               name={name}
               theme={theme}
               value={value}
               onChange={onChange}
               placeholder={placeholder}
               autoFocus={autoFocus}
            />
         )}
      </Box>
   )
}

export const MainInput = React.memo(Index)
