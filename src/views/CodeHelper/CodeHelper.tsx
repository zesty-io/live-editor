import React from "react"
import { CodeHelperTable } from "components"
import { Box, Fab, Zoom } from "@mui/material"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
interface Props {
   data: any
   metaData: any
   url: any
   token: any
   content: any
   theme: any
}

export const CodeHelper = ({ theme, content, metaData, data, url, token }: Props) => {
   const [currentScroll, setcurrentScroll] = React.useState(0)

   const scrollEvent = (e: any) => {
      const target = e.target as HTMLTextAreaElement
      setcurrentScroll(target.scrollTop)
      console.log("Current scroll position:", target.scrollTop)
   }

   const newData =
      Object.keys(data?.content).length === 0 ? metaData?.data?.data : data?.content
   return (
      <Box
         sx={{
            background: "background.paper",
            overflow: "auto",
            height: "100%",
            position: "relative",
         }}
      >
         <Zoom in={currentScroll >= 200 ? true : false}>
            <Fab
               sx={{ position: "absolute", bottom: "0", right: "0" }}
               color="secondary"
               size="small"
               aria-label="gotoTop"
               href="#gotoTop"
            >
               <KeyboardArrowUpIcon />
            </Fab>
         </Zoom>

         <CodeHelperTable
            content={content}
            onScroll={scrollEvent}
            url={url}
            token={token}
            metaData={metaData}
            data={newData}
            theme={theme}
         />
      </Box>
   )
}