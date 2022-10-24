import "../../styling/BodyStyling/Review.css";
export default function Review(props){
    return (
        <div className="review">
            <div className="review-container">
                    <div className="review-title-container">
                    <h1 className="review-name">{props.profile.name}</h1>
                    <h1 className="hyphens">''</h1>
                </div>
                <div id="heart-wrapper">
                    <div id="heart-container">
                        <p className="review-text">{props.testimony.text}</p>
                    </div>
                </div>
            </div>
            <img src={props.profile.picture} className="review-img"/>
        </div>
    )
}
