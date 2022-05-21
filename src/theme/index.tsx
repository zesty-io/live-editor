import { responsiveFontSizes } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import shadows from "./shadows"
import { light, dark } from "./palette"
import Mulish from "../assets/fonts/Mulish-Regular.woff2"

const getTheme = (mode: any, themeToggler: any) =>
   responsiveFontSizes(
      createTheme({
         // @ts-ignore
         palette: mode === "light" ? light : dark,
         // @ts-ignore
         shadows: shadows(mode),
         typography: {
            fontFamily: "Mulish",
            button: {
               textTransform: "none",
               fontWeight: "medium",
            },
         },
         zIndex: {
            appBar: 1200,
            drawer: 1300,
         },
         components: {
            MuiButton: {
               styleOverrides: {
                  root: {
                     fontWeight: 600,
                     borderRadius: 5,
                     paddingTop: 10,
                     paddingBottom: 10,
                  },
                  containedSecondary: mode === "light" ? { color: "white" } : {},
               },
            },
            MuiInputBase: {
               styleOverrides: {
                  root: {
                     borderRadius: 5,
                  },
               },
            },
            MuiOutlinedInput: {
               styleOverrides: {
                  root: {
                     borderRadius: 5,
                  },
                  input: {
                     borderRadius: 5,
                  },
               },
            },
            MuiCard: {
               styleOverrides: {
                  root: {
                     borderRadius: 8,
                  },
               },
            },
            MuiCssBaseline: {
               styleOverrides: `
        @font-face {
          font-family: 'Mulish';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Mulish'), local('Mulish'), url(${Mulish}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
            },
         },
         // @ts-ignore
         themeToggler,
      }),
   )

export default getTheme
