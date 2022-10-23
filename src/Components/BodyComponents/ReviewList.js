import "../../styling/BodyStyling/ReviewList.css";
import Review from "./Review";
import ReviewData from "../../Data/ReviewsData.json";

export default function ReviewList(props){
    const reviews =ReviewData.map(review => {return(
        <Review 
            key={review.id} 
            {...review}
        />
    )})
    return (
        <div className="review-list">
            <h1 className="review-list-title">Reviews</h1>
            <div className="review-list-container">
                {reviews}
            </div>
        </div>
    )
}