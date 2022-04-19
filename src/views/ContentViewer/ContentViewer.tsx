import React from "react"
import ReactJson from "react-json-view-ssr"
import { SearchAppBar } from "components"
interface Props {
   search: any
   data: any
   setSearch: (e: any) => void
}

export const ContentViewer = ({ data, search, setSearch }: Props) => {
   console.log(search, setSearch)
   return (
      <div>
         <SearchAppBar value={search} onChange={setSearch} />
         {/* <SearchAppBar
            value={search}
            onChange={(e: any) => console.log(e.currentTarget.value)}
         /> */}
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
      </div>
   )
}
