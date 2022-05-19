import React from "react"
import { CodeHelperTable, GotoTopBtn } from "components"
import { Box } from "@mui/material"
interface Props {
   data: any
   metaData: any
   url: any
   token: any
   content: any
   theme: any
   scrollPos: number
   scrollEvent: any
}

export const CodeHelper = ({
   scrollEvent,
   scrollPos,
   theme,
   content,
   metaData,
   data,
   url,
   token,
}: Props) => {
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
         <GotoTopBtn scrollPos={scrollPos} />

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
