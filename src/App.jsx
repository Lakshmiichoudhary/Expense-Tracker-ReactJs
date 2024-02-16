import Body from "./Components/Body"
import { Provider } from "react-redux"
import store from "./Store/Store"
import React from "react"

function App() {

  return (
    <Provider store={store}>
      <Body />
    </Provider>
  )
}

export default App
