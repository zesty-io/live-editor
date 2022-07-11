import React from "react"
import ReactJson from "react-json-view-ssr"
import { SearchAppBar, Subheaders } from "components"
import { Box } from "@mui/material"
interface Props {
   search: any
   data: any
   setSearch: (e: any) => void
   theme: any
   content: any
   response: any
}

export const JsonDataViewerTab = ({
   response,
   content,
   data,
   search,
   setSearch,
   theme,
}: Props) => {
   return (
      <Box sx={{ background: "#fff" }}>
         <Subheaders response={response} content={content} theme={theme} />
         <SearchAppBar value={search} onChange={setSearch} />
         <ReactJson
            style={{
               height: "68vh",
               overflowY: "scroll",
               fontSize: "14px !important",
               fontFamily: "Mulish",
            }}
            name={"data"}
            // @ts-ignore
            src={data}
            theme="flat"
            iconStyle="square"
            indentWidth={4}
            collapsed={2}
            displayObjectSize
            displayDataTypes={false}
            enableClipboard={true}
         />
      </Box>
   )
}
