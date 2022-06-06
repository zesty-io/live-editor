export const buttonStyles = {
   borderRadius: "5px",
   padding: "12px 24px 12px 16px",
   background: "#1b202c",
   color: "white",
   border: "1px #5B667D solid",
   boxShadow: "3px 3px 8px rgba(0,0,0,.5)",
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   cursor: "pointer",
   left: "40vw",
   bottom: 0,
   position: "absolute",
} as const

export const zestyStyles = {
   flex: "1",
   display: "inline-block",
   alignSelf: "center",
   marginLeft: "12px",
   fontSize: "18px",
   color: "#C7D4EA",
   letterSpacing: "1px",
   fontWeight: 600,
   // fontFamily: "'Arial Rounded MT Bold','Helvetica Rounded',Arial,sans-serif",
} as const

export const verifyUserPrompt = {
   position: "fixed",
   top: "5%",
   right: "5%",
} as const

export const loginPromp = {
   position: "fixed",
   top: "25%",
   left: "15%",
} as const

export const zestyWrapper = {
   width: "auto",
   background: "transparent",
   position: "fixed",
   left: "-40vw",
   bottom: "0",
   transition: "left 250ms ease",
   zIndex: "2147483647",
   boxShadow: "0px 0px 15px #000",
} as const

export const containerStyle = {
   background: "#fff",
   borderRadius: "3px",
   width: "40vw",
   height: "100vh",
}
