import React from "react"
import { Global } from "@emotion/react"
import style from "./styles"
import "@fontsource/lato"
import "@fontsource/lato/700.css"

export default function Layout({ children }) {
  return (
    <>
      <Global styles={style} />
      {children}
    </>
  )
}

