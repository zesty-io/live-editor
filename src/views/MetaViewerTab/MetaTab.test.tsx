import React from "react"
import { render, screen } from "@testing-library/react"
import { MetaViewerTab } from "./MetaViewerTab"
import { dummydata } from "constants/index"
const myMock1 = jest.fn()

const MetaProps = {
   onClose: myMock1,
   resourceZUID: "",
   instanceZUID: "",
   modal: false,
   theme: "",
   response: "",
   metaData: "",
   content: dummydata,
   token: "",
   url: "",
   getData: myMock1,
   createHeadtagModal: myMock1,
   setloading: myMock1,
   isLocalContent: true,
}
describe("Meta Tab", () => {
   beforeEach(() => {
      render(<MetaViewerTab {...MetaProps} />)
   })
   test("should pass", () => {
      expect(screen.getByText(/^Meta Tags$/)).toBeVisible()
      expect(screen.getByText(/DOM Report/)).toBeInTheDocument()
      expect(screen.getByText(/Page Meta Tags/)).toBeInTheDocument()
      expect(screen.getByText(/Auto-generated Head Tags /)).toBeInTheDocument()
   })
})
