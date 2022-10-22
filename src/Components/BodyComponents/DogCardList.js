import Card from "./Card";
import "../Data/DogBreedData.json";
import "../../styling/BodyStyling/DogCardList.css";
import DogBreedData from "../../Data/DogBreedData.json";
export default function Body(){
    const dogCards = DogBreedData.map(dogBreed => {return(
        <Card
         key={dogBreed.id} 
         {...dogBreed}
         />
        )
    })
    return (
            <section className="cards-list">
                <input type="text" placeholder="Search for a dog breed" className="search-bar"/>
                {dogCards}
            </section>
    )
}