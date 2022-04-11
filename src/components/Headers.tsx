/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-target-blank */
import React from "react"
interface Tabs {
   id: number
   label: string
   value: string
}
interface Props {
   children: React.ReactNode
   content: any
   setcurrentTab: (e: string) => void
   tabs: Tabs[]
   response: any
}

const linkStyles = {
   padding: "5px",
   display: "inline-block",
   color: "#497edf",
}
export const Headers = ({ response, children, content, setcurrentTab, tabs }: Props) => {
   console.log(response, "darwin")
   return (
      <div style={{ width: "100%", margin: "0 auto", background: "aqua" }}>
         <div
            style={{
               display: "flex",
               alignItems: "center",
               justifyContent: "space-evenly",
            }}
         >
            <img
               src="https://storage.googleapis.com/brand-assets.zesty.io/zesty-io-app-icon-transparent.png"
               width="22px"
               height="22px"
               alt="Zesty.io Logo"
            />
            <div>
               {tabs.map((e: Tabs) => {
                  return <button onClick={() => setcurrentTab(e.value)}>{e.label}</button>
               })}
            </div>

            <span>
               Browsing item <strong> {content.meta.web.seo_link_text} </strong>
               from the <strong>{content.meta.model_alternate_name} </strong>
               Content Model
            </span>
            <a
               style={linkStyles}
               target="_blank"
               href={`https://accounts.zesty.io/instances/${content.zestyInstanceZUID}`}
            >
               Open Zesty Account
            </a>
            <a
               style={linkStyles}
               target="_blank"
               href={`https://${content.zestyInstanceZUID}.manager.zesty.io/content/${content.meta.model.zuid}/${content.meta.zuid}`}
            >
               Open Zesty Manager
            </a>

            <a
               style={linkStyles}
               target="_blank"
               href={`https://${content.zestyInstanceZUID}.manager.zesty.io/schema/${content.meta.model.zuid}`}
            >
               Open Schema
            </a>
            {children}
         </div>
      </div>
   )
}
