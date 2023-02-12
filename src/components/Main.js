import Cards from "./Cards"
import cardsData from "./cardsData"

export default function Main() {
    const cards = cardsData
    return (
        <div className="main"> 
        {cards.map((item, i) => 
            (
                <Cards key={item.id} 
                    {...item}
                />
            )
            )} 
        </div>
    )
}