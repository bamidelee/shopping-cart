import { Link } from "react-router-dom";
import '../styles/shop.css';

function Shop (props){
    const {items} = props;
    return (
        <div>
            <div className="buttonContainer">
                <button onClick={props.all}>ALL</button>
                <button onClick={props.filter} id='1' >FASHION</button>
                <button onClick={props.filter} id='2' >GADGETS</button>
                <button onClick={props.filter}id='3' >GAMING</button>
                <button onClick={props.filter}id='4' >SHOES</button>
                <button onClick={props.filter} id='5'>HEALTH</button>
                <button onClick={props.filter} id='6'>FOOD</button>
                <button onClick={props.filter} id='7'>DRINKS</button>
                <button onClick={props.filter} id='8'>SPORT</button>
                <button onClick={props.filter} id='9'>BEAUTY</button>
            </div>
            <div className="items">
                {items.map((item) =><figure key={item.id} className='storeItem'>
                    <Link to={String(item.id)}><img src={item.image} alt={item.name} className='storeImage' /></Link>
                    <figcaption>
                        <div className="itemName">{item.name}</div>
                        <div><strong>₦{item.price}</strong></div>
                        <button onClick={props.ATC} id={item.id} style={{display:item.amount?'none':'block'}} className='ATC' >ADD TO CART</button>
                        <div style={{display:item.amount?'flex':'none'}} className='addAmount'>
                            <button id={item.id} onClick={props.subtract} disabled={item.amount === 1} > -</button>
                            <div> {item.amount}</div>
                            <button id={item.id} onClick={props.add} >+</button>
                        </div>
                    </figcaption>
                </figure>)}
            </div>
        </div>
    )
}
export default Shop;