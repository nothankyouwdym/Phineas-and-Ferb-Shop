import data from "./Data/data"
let totalPrice = 0;

const OrderTable = (props) =>{
  return(
    <table>
      <THead />
      <TBody props={props}/>
    </table>
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
  const rows = props.props.props.item.map((row,index) =>{
    return(
      <tr key={index}>
        <th>{row}</th>
        <th>{getPrices(row)}</th>
      </tr>,
      getTotalPrice(row)
    )
  })

  return <tbody>{rows}</tbody>
}


const getPrices = (row) =>{
  for(let i = 0; i < data.length; i++){
      if(data[i].name === row){
        return data[i].price
      }
  }
}


const getTotalPrice = (row) =>{
  totalPrice = totalPrice + getPrices(row)
}



export default OrderTable