import React from "react"
// import ReactJson from "react-json-view-ssr"
// import { SearchAppBar } from "components"
import CollapsibleTable from "components/CollapseTable"
// import { useTheme } from "@mui/material"
interface Props {
   search: any
   data: any
   setSearch: (e: any) => void
}

export const ContentViewer = ({ data, search, setSearch }: Props) => {
   // const theme = useTheme()
   console.log(search, setSearch)
   return (
      <div
         style={{
            background: "background.paper",
            overflow: "auto",
            padding: "1rem 2rem",
         }}
      >
         {/* <SearchAppBar value={search} onChange={setSearch} /> */}
         <CollapsibleTable data={data.content || {}} />
      </div>
   )
}
