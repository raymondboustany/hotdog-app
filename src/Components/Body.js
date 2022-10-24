import DogCardList from "./BodyComponents/DogCardList";
import Carousel from "./BodyComponents/Carousel"
import "../styling/BodyStyling/Body.css";
export default function Body(){
    return(
        <div className="homepage-body">
            <Carousel />
            <DogCardList />
        </div>
    )
}