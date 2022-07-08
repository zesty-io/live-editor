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
interface ITabs {
   tabList: any[]
   settime: any
   setcurrentTab: (e: string | null) => void
   token: string | undefined
}

const Index = ({ tabList, settime, setcurrentTab, token }: ITabs) => {
   const [value, setValue] = React.useState(0)
   const theme = useTheme()
   // @ts-ignore
   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setcurrentTab(event.currentTarget.textContent)
      setValue(newValue)
      settime()
   }

   const StyledTabs = styled((props: StyledTabsProps) => (
      <Tabs
         variant="scrollable"
         scrollButtons="auto"
         sx={{ width: "28vw" }}
         {...props}
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
         backgroundColor: theme.palette?.zesty?.zestyOrange,
      },
      "& .MuiTabScrollButton-root": {
         color: theme?.palette?.primary?.main,
      },
   })
   const StyledTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
      ({ theme }) => ({
         textTransform: "none",
         fontWeight: theme.typography.fontWeightMedium,
         fontSize: "14px",
         // marginRight: theme.spacing(1),
         marginRight: "5px",
         color: theme?.palette?.primary?.main,
         "&.Mui-selected": {
            // @ts-ignore
            color: theme.palette?.zesty?.zestyOrange,
            fontWeight: theme.typography.fontWeightBold,
            // @ts-ignore
            backgroundColor: theme.palette?.secondary?.mainRgb,
            borderRadius: "8px",
         },
         "&:hover, &.Mui-focusVisible": {
            // @ts-ignore
            backgroundColor: theme.palette?.alternate?.main,
            borderRadius: "8px",
         },
      }),
   )

   const filterTabs = token
      ? tabList
      : tabList.filter((e: any) => {
           return (
              e.label === "Navigator" || e.label === "JSON" || e.label === "Code Helper"
           )
        })
   return (
      <Box data-testid="tabContainer">
         <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "#fff" }}>
            {" "}
            <StyledTabs
               value={value}
               onChange={handleChange}
               aria-label="scrollable auto tabs example"
            >
               {filterTabs.map((e: any) => (
                  <StyledTab label={e.label} data-testid={e.label} />
               ))}
            </StyledTabs>
         </Box>
      </Box>
   )
}

export const TabContainer = React.memo(Index)
