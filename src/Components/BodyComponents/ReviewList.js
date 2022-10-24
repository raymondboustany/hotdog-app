import "../../styling/BodyStyling/ReviewList.css";
import Review from "./Review";
import ReviewData from "../../Data/ReviewsData.json";
var slideIndex = 0;
carousel();
export default function ReviewList(){
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
export function carousel() {
  var i;
  var x = document.getElementsByClassName("review-list-container");
  console.log(x);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  (x[slideIndex-1]).display = "block";
  setTimeout(carousel, 10000); // Change image every 10 seconds
}
