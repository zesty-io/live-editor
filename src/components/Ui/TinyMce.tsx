import React, { useRef } from "react"
import { Editor } from "@tinymce/tinymce-react"

export const TinyMce = ({ value, onChange }: any) => {
   const editorRef = useRef(null)
   const handleChange = (e: any) => {
      onChange(e)
   }
   return (
      <>
         <Editor
            apiKey={process.env.TINY_MCE_API_KEY}
            onEditorChange={(content) => {
               handleChange(content)
            }}
            value={value}
            onInit={(evt: any, editor: any) => (editorRef.current = editor)}
            init={{
               height: 500,
               menubar: false,
               plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
               ],
               toolbar:
                  "undo redo | formatselect | " +
                  "bold italic backcolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
               content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
         />
      </>
   )
}
