import collage from "../images/collage.svg"

export default function Hero() {
    return (
        <section className="hero">
            <img className="collage" src={collage} alt="Airbnb Collage"/>
            <div className="hero--text">
                <h1 className="hero--title">Online Experiences</h1>
                <div className="hero--p">
                    <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
                </div>
                
            </div>
        </section>
        
    )
}