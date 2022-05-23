import React from "react"
import { EditTable, GotoTopBtn } from "components"
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

export const EditTab = ({
   scrollPos,
   scrollEvent,
   content,
   theme,
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
            background: "#fff",
            overflow: "auto",
            height: "100%",
            position: "relative",
         }}
      >
         <GotoTopBtn scrollPos={scrollPos} />

         <EditTable
            onScroll={scrollEvent}
            url={url}
            token={token}
            metaData={metaData}
            data={newData}
            content={content}
            theme={theme}
         />
      </Box>
   )
}
