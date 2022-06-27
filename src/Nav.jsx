import {Link} from "react-router-dom"


const Nav = () =>{
  return(
    <nav>
      <h3 id="title">Phineas & Ferb Shop</h3>
     <Link to="/"><span>Home</span></Link>
     <Link to="/Shop"><span>Shop</span></Link>
     <Link to="/Order"><span>Order</span></Link>
     <Link to="/Contact"><span>Contact</span></Link>
    </nav>
  )
}

export default Nav