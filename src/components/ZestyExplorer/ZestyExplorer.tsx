/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-no-target-blank */
import React from "react"
import { ThemeProvider } from "@mui/material/styles"
// import CssBaseline from "@mui/material/CssBaseline"
import * as helper from "utils/index"
import { fetchJSON, getPageData } from "services/index"
import { OutlineCard as Card, UnauthorizedCard } from "components/Card"
import { verifyUserPrompt, zestyWrapper } from "./styles"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import getTheme from "theme/index"
import { useDarkMode } from "hooks"
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen"
import { Helmet } from "react-helmet"
import { ZestyExplorerBrowser } from "./ZestyExplorerBrowser"
import { LaunchBtn, Loader } from "components"
import { JsonData, ZestyExplorerProps } from "types"

// Main ZESTY EXPLORER
export const ZestyExplorer = ({ content = {} }: ZestyExplorerProps) => {
   const [localToken, setlocalToken] = React.useState("")
   const [secretKey, setsecretKey] = React.useState("")
   const [domain, setdomain] = React.useState("")
   const [jsonUrl, setjsonUrl] = React.useState(helper.getJsonUrl(domain))
   const [jsonData, setJsonData] = React.useState<JsonData>({
      data: content || null,
      error: false,
      res: {},
   })
   const token =
      localToken ||
      secretKey ||
      helper.getCookie("APP_SID") ||
      helper.getUserAppSID() ||
      process.env.ZESTY_TEST_APP_SID
   const [open, setOpen] = React.useState(false)
   const [pageData, setPageData] = React.useState<any>(content || {})
   const [response, setResponse] = React.useState<any>("")
   const [themeMode, themeToggler, mountedComponent] = useDarkMode()
   const [loading, setloading] = React.useState(false)
   console.log(themeMode, mountedComponent)
   const isContentAvailable = Object.keys(content).length !== 0 ? true : false

   const handleJSONData = (res: JsonData) => {
      setJsonData(res)
      setloading(false)
   }
   // get json data
   const fetchJsonData = async () => {
      console.log("run1 jsjon::::")
      setloading(true)
      const res = await fetchJSON(jsonUrl, setJsonData, token, setloading)
      res && handleJSONData(res)
   }

   const getData = async () => {
      if (!isContentAvailable) {
         console.log("run2 jsjon::::")
         const { data, response } = await getPageData(token)
         data && setPageData(data)
         response && setResponse(response)
      }
   }

   React.useEffect(() => {
      console.log(pageData, "page:::", jsonData, "JSONDATA:::::")
   }, [pageData, jsonData])

   // check if content is available
   React.useEffect(() => {
      const fetchJsonData = async () => {
         const res = await fetchJSON(jsonUrl, setJsonData, token, setloading)
         res && setJsonData(res)
         console.log("run3 jsjon::::")
      }
      !isContentAvailable &&
         fetchJsonData().then((e) => {
            console.log(e, "not use")
            if (Object.keys(content).length === 0) {
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
      !isContentAvailable && fetchJsonData()
   }, [jsonUrl, isContentAvailable])

   React.useEffect(() => {
      isContentAvailable && setJsonData({ data: content, error: false, res: {} })
      isContentAvailable && setPageData(content)
      console.log(pageData, jsonData, "2:::")
   }, [isContentAvailable])

   const handleCustomDomain = () => {
      setjsonUrl(helper.getJsonUrl(domain))
   }

   const handleUnauth = async () => {
      console.log(secretKey, "222222")
      const res = await getData()
      const res1 = await fetchJsonData()
      console.log(res, res1)
   }
   // const searchObject = { ...pageData }
   // // unset navigations for faster search
   // delete searchObject.navigationTree
   // // custom nav tree building
   // delete searchObject.navigationCustom

   if (!helper.canUseDOM()) {
      return null
   }

   if (loading) {
      return (
         <Box sx={verifyUserPrompt} zIndex={2147483647}>
            <Loader />
         </Box>
      )
   }
   if (pageData?.status === 401 || jsonData?.status === 401) {
      return (
         <Box sx={verifyUserPrompt} zIndex={2147483647}>
            <UnauthorizedCard
               handleCustomDomain={handleUnauth}
               value={secretKey}
               onChange={(e: any) => setsecretKey(e.target.value)}
            />
         </Box>
      )
   }
   if (
      jsonData?.error ||
      pageData?.error ||
      jsonData?.data === null ||
      Object.keys(jsonData)?.length === 0
   ) {
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
      <Box id={"zestyExplorer"} data-testid="zestyExplorerMain" sx={zestyWrapper}>
         <Helmet>
            <script src="https://cdn.jsdelivr.net/gh/zesty-io/fetch-wrapper@latest/dist/index.js" />
            <link
               href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swap"
               rel="stylesheet"
            ></link>
         </Helmet>
         <ThemeProvider theme={getTheme("light", themeToggler)}>
            {/* <CssBaseline /> */}
            {/* ZESTY LOGO  bottom right*/}
            {!open && (
               <LaunchBtn
                  onClick={() => helper.toggleOpenState(true, setOpen, helper.expandBody)}
               />
            )}

            {open && (
               <Box>
                  <ZestyExplorerBrowser
                     response={response}
                     pageData={pageData}
                     jsonData={jsonData}
                     getData={getData}
                     token={token}
                     setlocalToken={setlocalToken}
                  >
                     <Button
                        onClick={() =>
                           helper.toggleOpenState(false, setOpen, helper.expandBody)
                        }
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
