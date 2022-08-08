import { useParams } from "react-router-dom";
import '../styles/details.css';


function Details (props) {
    let {id} = useParams()
    let filtered = props.items.filter((item) => item.id === Number(id));
    let item = filtered[0];
    console.log(item)
     return (
        <div className="detailsContainer">
            <div>
                <div className="slideContainer">
                    <img src={item.images[0].url} alt={item.name} className={props.currentIndex===1?'slider active':'slider inactive'}/>
                    <img src={item.images[1].url} alt={item.name} className={props.currentIndex===2?'slider active':'slider inactive'}/>
                    <img src={item.images[2].url} alt={item.name} className={props.currentIndex===3?'slider active':'slider inactive'}/>
                </div>
                <div className="dotContainer">
                    <img src={item.images[0].url} alt={item.name} className='dot' onClick={props.slideImage} id='1'/>
                    <img src={item.images[1].url} alt={item.name} className='dot' onClick={props.slideImage}  id='2'/>
                    <img src={item.images[2].url} alt={item.name} className='dot' onClick={props.slideImage}  id='3'/>
                </div>
            </div>
            <div className="detailsLeft">
               <div>{item.name}</div> 
               <div>{item.description}</div> 
                <div className="price">₦{item.price}</div>
                <button onClick={props.ATC} id={item.id} style={{display:item.amount?'none':'block'}} >ADD TO CART</button>
                    <div style={{display:item.amount?'flex':'none'}} className='addAmountDetails'>
                        <button id={item.id} onClick={props.subtract} disabled={item.amount === 1} > -</button>
                        <div>{item.amount}</div>
                        <button id={item.id} onClick={props.add} >+</button>
                    </div>
            </div>
        </div>
    )
}
export default Details;