import "../../styling/BodyStyling/Review.css";
// import reviewImg from "../../images/DowPawHeart.png";
export default function Review(props){
    return (
        <div className="review">
            <div className="review-container">
                <h1 className="review-name">{props.profile.name}</h1>
                <p className="review-text">{props.testimony.text}</p>
            </div>
            <img src={props.profile.picture} className="review-img"/>
        </div>
    )
}