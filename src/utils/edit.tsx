/* eslint-disable @typescript-eslint/no-unused-vars */
export const get_elements_by_inner = (
   key: any,
   val: any,
   openModal: any,
   setEditData: any,
   setkey: any,
   setisWysiwyg: (e: any) => void,
   editMode: boolean,
) => {
   const newVal: string = val.replace(/<[^>]*>?/gm, "")

   const elems: any = [
      // @ts-ignore
      ...document.getElementsByTagName("p"),
      // // @ts-ignore
      // ...document.getElementsByTagName("div"),
      // @ts-ignore
      ...document.getElementsByTagName("h1"),
      // @ts-ignore
      ...document.getElementsByTagName("h2"),
      // @ts-ignore
      ...document.getElementsByTagName("h3"),
      // @ts-ignore
      ...document.getElementsByTagName("h4"),
      // @ts-ignore
      ...document.getElementsByTagName("h5"),
      // @ts-ignore
      ...document.getElementsByTagName("h6"),
      // @ts-ignore
      ...document.getElementsByTagName("a"),
      // @ts-ignore
      ...document.getElementsByTagName("img"),
   ]

   elems.forEach(async (elem: any) => {
      const prevVal = localStorage.getItem("preVal")?.replaceAll("EDIT", "")
      const prevKey = localStorage.getItem("preKey")

      if (
         elem.textContent === newVal ||
         (elem.textContent.trim() === prevVal?.trim() && key == prevKey)
      ) {
         if (editMode) {
            elem.innerHTML = `${val}`
            elem.style.position = "relative"
         }

         const btn = document.createElement("button")
         btn.innerHTML = "EDIT"
         btn.style.position = "absolute"
         btn.style.cursor = "pointer"
         btn.style.top = "-1rem"
         btn.style.right = "-1rem"
         btn.style.fontSize = "10px"
         btn.style.borderRadius = "5px"
         btn.style.height = "2rem"
         btn.style.width = "3rem"
         btn.style.color = "#fff"
         btn.style.background = "orange"
         btn.style.display = "flex"
         btn.style.justifyItems = "center"
         btn.style.justifyContent = "center"
         btn.style.textAlign = "center"
         btn.style.alignItems = "center"

         btn.onclick = async function () {
            // checker if value is richtext or string
            if (val.includes("<")) {
               setisWysiwyg(true)
            } else {
               setisWysiwyg(false)
            }
            if (editMode) {
               setkey(key)
               setEditData(val)
               localStorage.setItem("preVal", elem.innerText)
               localStorage.setItem("preKey", key)

               openModal()
            }
         }

         elem.onmouseover = function () {
            if (editMode) {
               elem.style.border = "2px orange dashed"
               elem.appendChild(btn)
            }
         }
         elem.onmouseleave = function () {
            if (editMode) {
               elem.style.border = "2px solid transparent"
               elem.removeChild(btn)
            }
         }
      }
   })
}

export const editModeFunc = (
   obj: any = {},
   editMode: boolean,
   openModal: any,
   setEditData: any,
   setkey: any,
   setisWysiwyg: any,
) => {
   const { meta, navigationTree, navigationCustom, ...newObj } = obj || {}
   obj = newObj
   obj &&
      Object?.entries(obj)?.forEach((val: any) => {
         if (typeof val[1] === "string") {
            get_elements_by_inner(
               val[0],
               val[1],
               openModal,
               setEditData,
               setkey,
               setisWysiwyg,
               editMode,
            )
         }
         if (typeof val[1] === "object") {
            editModeFunc(val[1], editMode, openModal, setEditData, setkey, setisWysiwyg)
         }
      })
}
