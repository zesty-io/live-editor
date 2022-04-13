import React from "react"
import ReactJson from "react-json-view-ssr"
interface Props {
   search: any
   data: any
   setSearch: (e: any) => void
}

const searchBarStyles = {
   padding: "5px",
   margin: "10px",
   borderRadius: "28px",
}

export const ContentViewer = ({ data, search, setSearch }: Props) => {
   return (
      <div style={{ background: "red" }}>
         <input
            type="text"
            placeholder="Search Content Values"
            value={search}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
               setSearch(e.currentTarget.value)
            }
            autoFocus
            style={searchBarStyles}
         />
         <ReactJson
            style={{ height: "80vh", overflowY: "scroll" }}
            name={"data"}
            // @ts-ignore
            src={data}
            theme="flat"
            iconStyle="square"
            indentWidth={4}
            collapsed={false}
            displayObjectSize
            displayDataTypes={false}
            enableClipboard={true}
         />
      </div>
   )
}
