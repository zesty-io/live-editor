import React from "react"
import "./loading.scss"

const Index = () => {
   return (
      <section>
         <div className="loading loading04">
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
         </div>
      </section>
   )
}
export const LoadingText = React.memo(Index)
