import React from "react"
import styled from "@emotion/styled"

const StyledButton = styled.a`
   font-size: 14px;
   color: #fff;
   background-color: #ff5d0a;
   padding: 0.5rem 1rem;
   border-radius: 5px;
   text-decoration: none;
   &:hover {
      text-decoration: none;
      color: #fff;
   }
`

interface Props {
   children: React.ReactNode
   href?: string
}
export const NormalBtn = ({
   children,
   href = `https://accounts.zesty.io/login`,
}: Props) => {
   return <StyledButton href={href}>{children}</StyledButton>
}
