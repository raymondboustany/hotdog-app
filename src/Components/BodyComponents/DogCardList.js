import Card from "./Card";
import "../../styling/BodyStyling/DogCardList.css";
import DogBreedData from "../../Data/DogBreedData.json";
export default function DogCardList(){
    // const dogCards = DogBreedData.map(dogBreed => {return(
    //     <Card
    //      key={dogBreed.id} 
    //      {...dogBreed}
    //      />
    //     )
    // })
    return (
        <div className="body-section">
            <div className="title-and-search-bar">
                <h1 className="title">Meet The Breeds</h1>
                <input type="text" placeholder="Breed Name" className="search-bar"/>
            </div>
            <section className="cards-list">
                {/* {dogCards} */}
            </section>
        </div>
            
    )
}