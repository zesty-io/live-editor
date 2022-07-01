export const createZestyDiv = (id = "zesty-explorer") => {
   const elem = document.createElement("div")
   elem.id = id
   document.body.appendChild(elem)
}
