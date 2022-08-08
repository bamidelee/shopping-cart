import '../styles/cart.css';

function Cart (prop) {
    return (
        <div className='mainCart'>
            <div className='cartContainer'>
                {prop.cart.map((item)=>
                <div key={item.id} className='cartItems'>
                    <img src={item.image} alt={item.name} className='cartImage' />
                    <div>
                        <div>{item.name}</div>
            
                        <div> ₦{item.price}</div>
                        <div className='addAmountCart'>
                            <button id={item.id} onClick={prop.subtract} disabled={item.amount === 1} > -</button>
                            <div> {item.amount}</div>
                            <button id={item.id} onClick={prop.add} >+</button>
                        </div>
                        <button id={item.id} className='remove' onClick={prop.remove}>
                            <span className="material-symbols-outlined">
                            delete
                            </span>REMOVE
                        </button>
                    </div>
                </div>)}
               
        </div>
        <button className='checkout'>CHECKOUT</button>
        </div>
    )
}
export default Cart;