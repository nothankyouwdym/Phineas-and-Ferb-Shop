import {Component} from "react"
import Nav from "./Nav"
import Main from "./Main"
import { Outlet } from "react-router-dom"

class App extends Component{
  render(){
    return(
      <section>
        <Nav />
        <Outlet />
      </section>
    )
  }
}

export default App