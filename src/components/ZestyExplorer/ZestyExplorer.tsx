/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-no-target-blank */
import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import * as helper from "utils/index"
import { fetchJSON, getPageData } from "services/index"
import { OutlineCard as Card } from "components/Card"
import { buttonStyles, verifyUserPrompt, zestyWrapper } from "./styles"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import getTheme from "theme/index"
import { useDarkMode } from "hooks"
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen"
import { Helmet } from "react-helmet"
import { ZestyExplorerBrowser } from "./ZestyExplorerBrowser"
import { LaunchBtn } from "components"

// dom access highlight function
const expandBody = (bool: boolean) => {
   const body: any = document.querySelector("body")
   body.style.marginLeft = bool ? "40vw" : "0"
   body.style.transition = "margin 250ms ease"
   const ze: any = document.getElementById("zestyExplorer")
   ze.style.left = bool ? "0" : "-40vw"
}

// renanme content to contentData

// Main ZESTY EXPLORER
export const ZestyExplorer = ({ content = {} }: any) => {
   const [domain, setdomain] = React.useState("")
   const [jsonUrl, setjsonUrl] = React.useState(helper.getJsonUrl(domain))
   const [jsonData, setJsonData] = React.useState<any>([])
   const token = helper.getCookie("APP_SID") || process.env.ZESTY_TEST_APP_SID
   const [open, setOpen] = React.useState(false)
   const [pageData, setPageData] = React.useState<any>("")
   const [response, setResponse] = React.useState<any>("")
   const [themeMode, themeToggler, mountedComponent] = useDarkMode()
   console.log(themeMode, mountedComponent)

   // get json data
   const fetchJsonData = async () => {
      const res = await fetchJSON(jsonUrl, setJsonData, token)
      res && setJsonData(res)
   }

   const getData = async () => {
      const { data, response } = await getPageData()
      data && setPageData(data)
      response && setResponse(response)
   }

   // check if content is available
   React.useEffect(() => {
      const fetchJsonData = async () => {
         const res = await fetchJSON(jsonUrl, setJsonData, token)
         res && setJsonData(res)
      }

      fetchJsonData().then((e) => {
         console.log(e, "not use")
         if (content && Object.keys(content).length === 0) {
            getData()
         } else {
            setPageData(content)
         }
      })
   }, [])

   React.useEffect(() => {
      console.log(jsonUrl, domain, "domain")
   }, [domain, jsonUrl])

   React.useEffect(() => {
      fetchJsonData()
   }, [jsonUrl])

   const handleCustomDomain = () => {
      setjsonUrl(helper.getJsonUrl(domain))
   }

   const searchObject = { ...pageData }
   // unset navigations for faster search
   delete searchObject.navigationTree
   // custom nav tree building
   delete searchObject.navigationCustom

   if (!helper.canUseDOM()) {
      return null
   }

   if (jsonData?.data === null || jsonData?.length == 0) {
      return (
         <Box sx={verifyUserPrompt} zIndex={2147483647}>
            <Card
               handleCustomDomain={handleCustomDomain}
               value={domain}
               onChange={(e: any) => setdomain(e.target.value)}
            />
         </Box>
      )
   }

   return (
      <Box id={"zestyExplorer"} sx={zestyWrapper}>
         <Helmet>
            <script src="https://cdn.jsdelivr.net/gh/zesty-io/fetch-wrapper@latest/dist/index.js" />
            <link
               href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swap"
               rel="stylesheet"
            ></link>
         </Helmet>
         <ThemeProvider theme={getTheme("light", themeToggler)}>
            <CssBaseline />
            {/* ZESTY LOGO  bottom right*/}
            {!open && (
               <LaunchBtn
                  onClick={() => helper.toggleOpenState(true, setOpen, expandBody)}
                  style={buttonStyles}
               >
                  <img
                     src="https://storage.googleapis.com/brand-assets.zesty.io/zesty-io-app-icon-transparent.png"
                     width="32px"
                     height="32px"
                     alt="Zesty.io Logo"
                  />
               </LaunchBtn>
            )}

            {open && (
               <Box>
                  <ZestyExplorerBrowser
                     response={response}
                     pageData={pageData}
                     contentData={searchObject}
                     jsonData={jsonData}
                     getData={getData}
                  >
                     <Button
                        onClick={() => helper.toggleOpenState(false, setOpen, expandBody)}
                        variant="outlined"
                        size="small"
                     >
                        <CloseFullscreenIcon />
                     </Button>
                  </ZestyExplorerBrowser>
               </Box>
            )}
         </ThemeProvider>
      </Box>
   )
}
