export interface JsonData {
   data: any
   error: boolean
   res: any
   status?: number
}

export interface ZestyExplorerProps {
   content?: any
}
export interface ZestyExplorerBrowserProps {
   pageData: any
   response: any
   children: React.ReactNode
   jsonData: JsonData
   getData: () => void
   token: string | undefined
   settoken: (e: string | undefined) => void
   isLocalContent: boolean
}
