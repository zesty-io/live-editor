import styled from "@emotion/styled"
import React from "react"
interface Props {
   children?: React.ReactNode
   onClick: () => void
   theme: any
   title?: string
   variant?: string
   type?: any
   size?: string
   padding?: string
}

export const CustomButton = styled.button`
   width: "auto";
   white-space: nowrap;
   background: ${(props: any) =>
      props.variant === "error"
         ? props.theme.palette.zesty.zestyLightBlue
         : props.theme.palette.zesty.zestyOrange};
   padding: ${(props: any) => props.padding};
   display: flex;
   justify-content: flex-start;
   justify-items: flex-start;
   text-align: left;
   outline: none;
   font-size: ${(props: any) => props.size};
   cursor: pointer;
   font-family: Mulish;
   border: 1px solid transparent;
   border-radius: 5px;
   font-weight: 400;
   transition: all 0.1s ease-in-out;
   outline: none;
   color: #fff;
   align-items: center;
   gap: 0.3rem;

   &:hover {
      background: ${(props: any) => props.theme.palette.secondary.snow};
      border: 1px solid ${(props: any) => props.theme.palette.zesty.zestyOrange};
      color: ${(props: any) => props.theme.palette.zesty.zestyOrange};
   }

   &:focus {
      background: ${(props: any) => props.theme.palette.secondary.snow};
      border: 1px solid ${(props: any) => props.theme.palette.zesty.zestyOrange};
      color: ${(props: any) => props.theme.palette.zesty.zestyOrange};
   }
   &:active {
      background: ${(props: any) => props.theme.palette.secondary.snow};
      border: 1px solid ${(props: any) => props.theme.palette.zesty.zestyOrange};
      color: ${(props: any) => props.theme.palette.zesty.zestyOrange};
      transform: scale(0.99);
   }
`
export const CustomBtn = ({
   variant = "primary",
   title,
   children,
   onClick,
   theme,
   type = "button",
   size = "10px",
   padding = "0.5rem 0.5rem",
}: Props) => {
   return (
      <CustomButton
         // @ts-ignore
         size={size}
         type={type}
         // @ts-ignore
         variant={variant}
         theme={theme}
         title={title}
         onClick={onClick}
         padding={padding}
      >
         {children}
      </CustomButton>
   )
}

const CustomLnk = styled.button`
   width: "auto";
   white-space: nowrap;
   background: ${(props: any) =>
      props.variant === "error"
         ? props.theme.palette.zesty.zestyLightBlue
         : props.theme.palette.common.white};
   padding: 0.5rem 0.5rem;
   display: flex;
   justify-content: flex-start;
   justify-items: flex-start;
   text-align: left;
   outline: none;
   font-size: 12px;
   cursor: pointer;
   font-family: Mulish;
   border: 3px solid transparent;
   /* border-radius: 5px; */
   font-weight: 400;
   transition: all 0.1s ease-in-out;
   outline: none;
   color: ${(props: any) => props.theme.palette.zesty.zestyZambezi};
   align-items: center;
   gap: 0.3rem;

   &:hover {
      background: ${(props: any) => props.theme.palette.common.white};
      border-bottom: 3px solid ${(props: any) => props.theme.palette.zesty.zestyOrange};
      color: ${(props: any) => props.theme.palette.zesty.zestyOrange};
   }

   &:focus {
      background: ${(props: any) => props.theme.palette.common.white};
      border-bottom: 3px solid ${(props: any) => props.theme.palette.zesty.zestyOrange};
      color: ${(props: any) => props.theme.palette.zesty.zestyOrange};
   }
   &:active {
      background: ${(props: any) => props.theme.palette.common.white};
      border-bottom: 3px solid ${(props: any) => props.theme.palette.zesty.zestyOrange};
      color: ${(props: any) => props.theme.palette.zesty.zestyOrange};
   }
`

export const CustomLink = ({
   variant = "primary",
   title,
   children,
   onClick,
   theme,
}: Props) => {
   return (
      <CustomLnk
         // @ts-ignore
         variant={variant}
         theme={theme}
         title={title}
         onClick={onClick}
      >
         {children}
      </CustomLnk>
   )
}
