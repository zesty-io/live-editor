export const createZestyDiv = (id = "zesty-explorer") => {
   const elem = document.createElement("div")
   elem.id = id
   document.body.appendChild(elem)
}

// dom access highlight function
export const expandBody = (bool: boolean) => {
   const body: any = document.querySelector("body")
   body.style.marginLeft = bool ? "40vw" : "0"
   body.style.transition = "margin 250ms ease"
   const ze: any = document.getElementById("zestyExplorer")
   ze.style.left = bool ? "0" : "-40vw"
}
