import { Component } from "react"
import data from "./Data/data"
import OrderTable from "./OrderTable"

class Order extends Component{
  state = {
    item: []
  }
  render(){


  return(
    <section>
      <h1>Order Page</h1>
      <select multiple onClick={this.handleChange}>
        {data.map((row,index) =>{
          if(row.inStock === true){
            return <option value={row.name} id={index}>{row.name}</option>
          }
        })}
      </select>
      <OrderTable props={this.state}/>
    </section>
  )
  }

  handleChange = (e) =>{
    this.setState(({
      item: [...this.state.item,e.target.value]
    }))
  }
}

export default Order