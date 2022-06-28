import { useRef } from "react"
import data from "./Data/data"



const OrderTable = (props) =>{
  return(
    <section>
      <table>
        <THead />
        <TBody props={props}/>
      </table>

    </section>  
  )
}

const THead = () =>{
  return(
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
        </tr>
      </thead>
  )
}

const TBody = (props) =>{
  { data.map((item, i) => { return (
    <ReactDeleteRow key={i} data={item} onDelete={ item => { return window.confirm(`Are you sure?`) }}>
        <td>{item.title}</td>
        <td>{item.body}</td>
    </ReactDeleteRow>
    )}) }

  return <tbody>{rows}</tbody>
}


const getPrices = (row) =>{
  for(let i = 0; i < data.length; i++){
      if(data[i].name === row){
        return data[i].price
      }
  }
}

const handleClick = () =>{
  
}


export default OrderTable



const rows = props.props.props.item.map((row,index) =>{
  return(
    <tr key={index}>
      <th>{row}</th>
      <th>{getPrices(row)}</th>
      <th><button onClick={handleClick(row,index)}>Deselect</button></th>
    </tr>
  )
})