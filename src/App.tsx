import React from "react"
import TodoApp from "components/TodoApp"
import Button from "components/Button"
import "./App.css"

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoApp />
      
      {/* <Button onClick={() => console.log("test")} name="Click"/> */}
      
    </div>
  )
}

export default App
