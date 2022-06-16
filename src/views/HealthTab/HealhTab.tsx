import { Box, Typography } from "@mui/material"
import React from "react"
import { CustomButton, Tooltip } from "components"
import { Subheaders } from "components"

interface Props {
   content: any
   theme: any
   response: any
}

export const HealhTab = ({ content, theme, response }: Props) => {
   console.log(content, theme)
   const currentUrl = window.location.href
   const w3cUrl = "https://validator.w3.org/nu/?doc=" + currentUrl
   const cssUrl = "https://jigsaw.w3.org/css-validator/validator?uri=" + currentUrl
   const section50Url = "https://www.section508.gov/test/web-software/"
   const lighthouseUrl = "https://web.dev/measure/?url=" + currentUrl

   const openInNewTab = (url: any) => {
      // @ts-ignore
      window.open(url, "_blank").focus()
   }
   const linkList = [
      {
         name: "w3c",
         label: "W3C Validator",
         href: w3cUrl,
         btnText: "Click here to Validate",
         infoText:
            "This validator checks the markup validity of Web documents in HTML, XHTML, SMIL, MathML, etc.",
      },
      {
         name: "Css",
         label: "CSS Validator",
         href: cssUrl,
         btnText: "Click here to Validate",
         infoText:
            "This tool helps to validate CSS based on W3 CSS rules, show errors, and suggestion to write the correct CSS. ",
      },
      {
         name: "Sec 508",
         label: "Section 508 compliance",
         href: section50Url,
         btnText: "Click here for more info",
         infoText:
            "Section 508 requires that the federal government procure, create, use and maintain ICT that is accessible to people with disabilities, regardless of whether or not they work for the federal government.",
      },
      {
         name: "lighthouse",
         label: "Google Lighthouse",
         href: lighthouseUrl,
         btnText: "Click here for more info",
         infoText:
            "Lighthouse is an open-source, automated tool for improving the performance, quality, and correctness of your web apps.",
      },
   ]
   return (
      <>
         <Subheaders response={response} content={content} theme={theme} />
         <Box
            paddingX={4}
            paddingY={4}
            sx={{
               background: "background.paper",
               overflow: "auto",
               height: "90vh",
               position: "relative",
            }}
         >
            <Box
               paddingY={4}
               sx={{
                  background: theme.palette.common.white,
                  overflow: "auto",
                  height: "100%",
               }}
               boxShadow={1}
               borderRadius={4}
            >
               <Typography
                  paddingBottom={4}
                  sx={{
                     fontSize: "24px",
                     fontWeight: "bold",
                     color: theme.palette.zesty.zestyOrange,
                     textAlign: "center",
                  }}
               >
                  Site Health Check
               </Typography>
               <Box
                  paddingLeft={12}
                  sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}
               >
                  {linkList.map((e: any) => {
                     return (
                        <Box>
                           <Box
                              sx={{
                                 display: "flex",
                                 textAlign: "center",
                                 alignItems: "center",
                              }}
                           >
                              <Typography
                                 paddingBottom={1}
                                 marginLeft={1}
                                 paddingTop={1}
                                 sx={{
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    color: theme.palette.primary.main,
                                 }}
                              >
                                 {e.label}
                              </Typography>
                              <Tooltip name={e.name} text={e.infoText} />
                           </Box>
                           <CustomButton onClick={() => openInNewTab(e.href)}>
                              {e.btnText}
                           </CustomButton>
                        </Box>
                     )
                  })}
               </Box>
            </Box>
         </Box>
      </>
   )
}
