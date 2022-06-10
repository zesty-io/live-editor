import styled from "@emotion/styled"
import React from "react"
interface Props {
   children?: React.ReactNode
   onClick: () => void
   theme: any
   title?: string
   variant?: string
}

export const CustomButton = styled.button`
   width: "auto";
   white-space: nowrap;
   background: ${(props: any) =>
      props.variant === "error"
         ? props.theme.palette.zesty.zestyLightBlue
         : props.theme.palette.zesty.zestyOrange};
   padding: 0.5rem 0.5rem;
   display: flex;
   justify-content: flex-start;
   justify-items: flex-start;
   text-align: left;
   outline: none;
   font-size: 10px;
   cursor: pointer;
   font-family: Mulish;
   border: 1px solid transparent;
   border-radius: 5px;
   font-weight: 900;
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
}: Props) => {
   return (
      <CustomButton
         // @ts-ignore
         variant={variant}
         theme={theme}
         title={title}
         onClick={onClick}
      >
         {children}
      </CustomButton>
   )
}
