import { Outlet, Route, Routes } from "react-router-dom"
import Form from "./Form/Form"
import Items from "./Items/Items"

const App = () => {
  return (
    <>
      <Form/>
      <Items/>
    </>
  )
}

export default App