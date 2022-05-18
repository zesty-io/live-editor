import React from "react"
import { CollapsibleTable } from "components/Table"
import { Box, Fab, Zoom } from "@mui/material"
interface Props {
   search: any
   data: any
   setSearch: (e: any) => void
   metaData: any
   url: any
   token: any
}

export const ContentViewer = ({
   metaData,
   data,
   search,
   setSearch,
   url,
   token,
}: Props) => {
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
            padding: "1rem 2rem",
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
               ⬆️
            </Fab>
         </Zoom>

         <CollapsibleTable
            onScroll={scrollEvent}
            url={url}
            token={token}
            metaData={metaData}
            data={newData}
         />
      </Box>
   )
}
