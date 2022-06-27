import data from "./Data/data"

const Shop = () =>{
  return(
    <section>
      <h1>Shop Page</h1>
      <table>
        <THead />
        <TBody />
      </table>
    </section>  
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
        <th>{row.name}</th>
        <th>{row.price}</th>
        <th>{row.inStock.toString("0")}</th>
        <th>{row.quantity}</th>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}


export default Shop