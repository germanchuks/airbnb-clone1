import airbnb_logo from "../images/airbnb_logo.svg" 


export default function Nav() {
    return (
        <header className="nav">
            <img src={airbnb_logo} alt="Airbnb Logo" className="nav--logo"/>
        </header>            
    )
}