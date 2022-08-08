import { Link } from "react-router-dom";

function Home () {
    return (
        <div className="home">
            <div className="homeContent">
                <h1 className="homeLogo">PAID</h1>
                <div><em>"We deliver to <strong>MARS</strong></em>"</div>
                <Link to='shop' className="link shopNow" >SHOP NOW</Link>
            </div>
        </div>
    )
}
export default Home