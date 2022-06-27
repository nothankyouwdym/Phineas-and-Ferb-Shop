import data from "./Data/data"


const Shop = () =>{
  return(
    <table>
      <THead />
      <TBody />
    </table>
  )
}

const THead = () =>{
  return(
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>In Stock</th>
        <th>Quantity</th>
      </tr>
    </thead>
  )
}


const TBody = () =>{
  const rows = data.map((row,index) =>{
    return(
      <tr key={index}>
        <td>{row.name}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}


export default Shop