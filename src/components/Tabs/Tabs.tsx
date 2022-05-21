import React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"
import { useTheme } from "@mui/system"

interface Tabs {
   id: number
   label: string
   value: string
}
interface StyledTabProps {
   label: string
}

interface StyledTabsProps {
   children?: React.ReactNode
   value: number
   onChange: (event: React.SyntheticEvent, newValue: number) => void
}

const Index = ({ tabList, settime, setcurrentTab }: any) => {
   const [value, setValue] = React.useState(0)
   const theme = useTheme()
   // @ts-ignore
   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      console.log(event)
      console.log(newValue, 123123123)
      setcurrentTab(newValue)
      setValue(newValue)
      settime()
   }

   const StyledTabs = styled((props: StyledTabsProps) => (
      <Tabs
         variant="scrollable"
         scrollButtons
         {...props}
         sx={{ width: "22vw" }}
         TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
      />
   ))({
      "& .MuiTabs-indicator": {
         display: "flex",
         justifyContent: "center",
         backgroundColor: "transparent",
      },
      "& .MuiTabs-indicatorSpan": {
         maxWidth: 0,
         width: "100%",
         backgroundColor: theme.palette.zesty.zestyOrange,
      },
      "& .MuiTabScrollButton-root": {
         color: theme.palette.primary.main,
      },
   })
   const StyledTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
      ({ theme }) => ({
         textTransform: "none",
         fontWeight: theme.typography.fontWeightMedium,
         fontSize: theme.typography.pxToRem(15),
         // marginRight: theme.spacing(1),
         marginRight: "5px",
         color: theme.palette.primary.main,
         "&.Mui-selected": {
            // @ts-ignore
            color: theme.palette.zesty.zestyOrange,
            fontWeight: theme.typography.fontWeightBold,
            // @ts-ignore
            backgroundColor: theme.palette.secondary.mainRgb,
            borderRadius: "8px",
         },
         "&:hover, &.Mui-focusVisible": {
            // @ts-ignore
            backgroundColor: theme.palette.alternate.main,
            borderRadius: "8px",
         },
      }),
   )
   return (
      <Box>
         <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "#fff" }}>
            {" "}
            <StyledTabs
               value={value}
               onChange={handleChange}
               aria-label="scrollable auto tabs example"
            >
               {tabList.map((e: any) => (
                  <StyledTab label={e.label} />
               ))}
            </StyledTabs>
         </Box>
      </Box>
   )
}
export const TabContainer = React.memo(Index)
