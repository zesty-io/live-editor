import React from "react"
import ReactJson from "react-json-view-ssr"
import { SearchAppBar } from "components"
import { Box } from "@mui/material"
interface Props {
   search: any
   data: any
   setSearch: (e: any) => void
}

export const JsonDataViewer = ({ data, search, setSearch }: Props) => {
   console.log(data, "data123123")
   return (
      <Box sx={{ background: "red" }}>
         <SearchAppBar value={search} onChange={setSearch} />
         <ReactJson
            style={{ height: "80vh", overflowY: "scroll" }}
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
