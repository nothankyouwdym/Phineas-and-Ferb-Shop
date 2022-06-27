import { useState } from "react"
import OrderTable from "./OrderTable"

const Order = () =>{

  const [item,setItem] = useState([]) 

  const handleChange = (e) =>{
    setItem([...item,e.target.value])
  }
  return(
    <section>
      <h1>Order Page</h1>
      <select multiple onClick={handleChange}>
        <option value="Hat">Hat</option>
        <option value="T-Shirt">T-Shirt</option>
        <option value="Dog Food">Dog Food</option>
        <option value="Cat Food">Cat Food</option>
      </select>

      <OrderTable props={item}/>
    </section>
  )
}

export default Order