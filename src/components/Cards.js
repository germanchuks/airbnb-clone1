import star from "../images/star.svg"

export default function Cards(props) {
    console.log(props)
    return (
         
        <div className="content">
            <div className="content-image-box">
                <img src={props.image} className="coverImg" alt="Cover"/>
                {props.available && <div className="available">{props.available === 'yes' ? 'ONLINE' : 'SOLD OUT'}</div>}
            </div>
            <div className="content-text">
                <div className="rating">
                    <img src={star} alt="Rating" />
                    <span style={{paddingLeft:'5px'}}>
                        <span>{props.stats.rating}</span> <span className="content-grey-text" 
                        style={{color: '#918E9B'}}>(<span>{props.stats.reviews}</span>) &bull; {props.country}</span>
                    </span>
                </div>
                <div>{props.title}</div>
                <div><span className="content-bold-text" style={{fontWeight:'600'}}>From ${props.cost} </span>/ person</div>
                
            </div>
        </div>
    )
}