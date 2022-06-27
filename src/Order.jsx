import { Component } from "react"
import OrderTable from "./OrderTable"

import data from "./Data/data"

class Order extends Component{
  state = {
    item: []
  }
  render(){

   handleChange = (e) =>{
    this.setState({item: [...this.state.item,e.target.value]})
  }
  return(
    <section>
      <h1>Order Page</h1>
      {this.getData}
    </section>
  )
  }


  getData = () =>{
    const rows = data.map((row,index) =>{
      return(
        <option value={row.name} id={index}>{row.name}</option>
      )
    })
    return <select multiple onClick={this.handleChange}>{rows}</select>
  }
}

export default Order