
import { Link, Outlet } from "react-router-dom";
import '../styles/home.css'

function Layout (props) {
    return(
        <div>
            
            <div className="fixed">
                <header>
                    <div className="logo">PAID</div>
                    <nav>
                        <Link to='/' className="link">HOME</Link>
                        <Link to='shop' className="link">SHOP</Link>
                        <Link to='cart' className="link cart">
                            <span className="material-symbols-outlined">
                                shopping_cart
                            </span>
                            <span>
                                {props.cart}
                            </span>
                        </Link>
                    </nav>
                </header>
            </div>
            <Outlet/>
        </div>
    )
}
export default Layout