import React from "react"
import TodoApp from "components/TodoApp"
import Button from "components/Button"
import TextField from "components/TextField"
import { ReactComponent as MagnifierIcon } from "assets/icons/magnifier.svg"
import "./App.css"

const App = (): JSX.Element => {
  return (
    <div className="App">
      <TodoApp />

      {/* Example input
        <TextField
        name="Search"
        placeHolder="What are you lookin for?"
        leftComponent={<MagnifierIcon />}
        // rightComponent={<MagnifierIcon />}
      /> */}

      {/* Example button 
        <Button
        onClick={() => console.log("test")}
        name="Click"
        variant="primary"
      /> */}
    </div>
  )
}

export default App
