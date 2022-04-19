import { Theme } from "@material-ui/core/styles/createMuiTheme"
import { createMuiTheme } from "@material-ui/core/styles"

declare module "@material-ui/styles" {
   interface DefaultTheme extends MyTheme {}
}

declare module "@material-ui/core/styles/createMuiTheme" {
   interface ThemeOptions extends MyTheme {}
}

export interface MyTheme extends Theme {
   backgroundColor: string
   zesty: any
}

const theme = createMuiTheme({
   backgroundColor: "red",
   zesty: any,
})

export { theme }
