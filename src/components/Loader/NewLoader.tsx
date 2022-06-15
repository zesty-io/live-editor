import React from "react"
import zestyLogo from "../../assets/zesty-io-logo.svg"
import zestyLogoName from "../../assets/zestyname.svg"
import {
   LoaderContainer,
   LoaderContentContainer,
   LoaderInnerContainer,
   LoaderInnerContentContainer,
   NewLogo,
   NewLogoText,
} from "./style"
import { Box } from "@mui/material"
import { LoadingText } from "./LoadingText"

const Index = () => {
   return (
      <LoaderContainer>
         <LoaderInnerContainer>
            <LoaderContentContainer>
               <LoaderInnerContentContainer>
                  <NewLogo
                     animate={{ x: 0, opacity: 1 }}
                     initial={{ x: "15vw", opacity: 0 }}
                     transition={{
                        // @ts-ignore
                        type: "just",
                        // @ts-ignore
                        stiffness: 300,
                        // @ts-ignore
                        duration: 0.4,
                     }}
                  >
                     <img src={zestyLogo} alt="Loading" height={100} width={100} />
                  </NewLogo>
                  <NewLogoText
                     animate={{ x: 0, opacity: 1 }}
                     initial={{ x: "-10vw", opacity: 0 }}
                     transition={{
                        // @ts-ignore
                        type: "tween",
                        // @ts-ignore
                        stiffness: 300,
                        // @ts-ignore
                        duration: 0.4,
                        delay: 0.3,
                     }}
                  >
                     <img src={zestyLogoName} alt="Loading" height={150} width={150} />
                  </NewLogoText>
               </LoaderInnerContentContainer>
               <Box
                  sx={{
                     width: "100%",
                     display: "flex",
                     justifyContent: "center",
                     justifyItems: "center",
                     userSelect: "none",
                  }}
               >
                  <LoadingText />
               </Box>
            </LoaderContentContainer>
         </LoaderInnerContainer>
      </LoaderContainer>
   )
}

export const NewLoader = React.memo(Index)
