import styled from "@emotion/styled"
import { motion } from "framer-motion"
export const LoaderContainer = styled(motion.div)`
   position: absolute;
   top: 0;
   left: 0;
   z-index: 2147483647;
   height: 100%;
   width: 100%;
   background-color: #fff;
`
export const LoaderInnerContainer = styled(motion.div)`
   position: relative;
   width: 100%;
   height: 100%;
   background-color: #fff;
   display: flex;
   justify-items: center;
   flex-direction: column;
`
export const LoaderContentContainer = styled(motion.div)`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -60%);
`
export const LoaderInnerContentContainer = styled(motion.div)`
   display: flex;
   justify-items: center;
   justify-content: center;
   flex-direction: row;
   text-align: center;
   align-items: center;
   height: 100%;
   width: 100%;
   user-select: none;
   gap: 1rem;
`
export const NewLogo = styled(motion.div)`
   display: flex;
`

export const NewLogoText = styled(motion.div)`
   display: flex;
`

export const TopContainer = styled(motion.div)`
   display: flex;
`

export const ImgContainers = styled(motion.div)`
   display: flex;
   margin: 0.5rem 0.1rem;
`
