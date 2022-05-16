import React from "react"
// import ReactJson from "react-json-view-ssr"
// import { SearchAppBar } from "components"
import { CollapsibleTable } from "components/Table"
import { Box } from "@mui/material"
// import { useTheme } from "@mui/material"
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
   // const theme = useTheme()
   return (
      <Box
         sx={{
            background: "background.paper",
            overflow: "auto",
            padding: "1rem 2rem",
         }}
      >
         {/* <SearchAppBar value={search} onChange={setSearch} /> */}
         <CollapsibleTable
            url={url}
            token={token}
            metaData={metaData}
            data={metaData?.data?.data || data?.content || {}}
         />
      </Box>
   )
}
