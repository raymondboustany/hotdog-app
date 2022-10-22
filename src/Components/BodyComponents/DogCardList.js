import Card from "./Card";
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
        <div>
            <h1>Meet The Breeds</h1>
            <input type="text" placeholder="Search for a dog breed" className="search-bar"/>
            <section className="cards-list">
                {dogCards}
            </section>
        </div>
            
    )
}