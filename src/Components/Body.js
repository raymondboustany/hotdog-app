import DogCardList from "./BodyComponents/DogCardList";
import ReviewList from "./BodyComponents/ReviewList";
import "../styling/BodyStyling/Body.css";
export default function Body(){
    return(
        <div id="homepage-body">
            <DogCardList />
            <ReviewList />
        </div>
    )
}