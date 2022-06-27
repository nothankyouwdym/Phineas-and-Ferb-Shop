import {Component} from "react"
import Nav from "./Nav"
import Main from "./Main"

class App extends Component{
  render(){
    return(
      <section>
        <Nav />
        <Main />
      </section>
    )
  }
}