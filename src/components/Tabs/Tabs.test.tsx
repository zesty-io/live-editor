import React from "react"
import { render, screen } from "@testing-library/react"
import { TabContainer } from "./Tabs"
import { tabList } from "constants/index"
// import { dummydata } from "constants"
const myMock1 = jest.fn()
describe("Tab container ", () => {
   beforeEach(() => {
      render(
         <TabContainer
            setcurrentTab={myMock1}
            settime={myMock1}
            tabList={tabList}
            token={""}
         />,
      )
   })
   it("show only 3 tabs when using npm and !token ", () => {
      const heading = screen.getByTestId("tabContainer")
      const Nav = screen.queryByTestId("Navigator")
      const Code = screen.queryByTestId("Code Helper")
      const JSON = screen.queryByTestId("JSON")
      const edit = screen.queryByTestId("Edit")
      const seo = screen.queryByTestId("SEO")
      const health = screen.queryByTestId("Health")
      expect(heading).toBeTruthy()
      expect(Nav).toBeTruthy()
      expect(Code).toBeTruthy()
      expect(JSON).toBeTruthy()
      expect(edit).toBeNull()
      expect(health).toBeNull()
      expect(seo).toBeNull()
   })
})

describe("Tab container v2 ", () => {
   beforeEach(() => {
      render(
         <TabContainer
            setcurrentTab={myMock1}
            settime={myMock1}
            tabList={tabList}
            token={"true"}
         />,
      )
   })
   it("show only all tabs when using npm and token ", () => {
      const heading = screen.getByTestId("tabContainer")
      const Nav = screen.queryByTestId("Navigator")
      const Code = screen.queryByTestId("Code Helper")
      const JSON = screen.queryByTestId("JSON")
      const edit = screen.queryByTestId("Edit")
      const seo = screen.queryByTestId("SEO")
      const health = screen.queryByTestId("Health")
      expect(heading).toBeTruthy()
      expect(Nav).toBeTruthy()
      expect(Code).toBeTruthy()
      expect(JSON).toBeTruthy()
      expect(edit).toBeTruthy()
      expect(health).toBeTruthy()
      expect(seo).toBeTruthy()
   })
})
