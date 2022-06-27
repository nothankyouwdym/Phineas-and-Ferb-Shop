

const OrderTable = (props) =>{
  return(
    <table>
      <Thead />
      <Tbody props={props}/>
    </table>
  )
}

const Thead = () =>{
  return(
    <thead>
      <tr>
        <th>Item</th>
      </tr>
    </thead>
  )
}


const Tbody = (props) =>{
  const rows = props.props.item.map((row,index) =>{
    return(
      <tr key={index}>
        <th>{row}</th>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}


export default OrderTable