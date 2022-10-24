import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import "./styling/App.css";

function App(){
    return (
        <main>
            <Header />
            <Body />
            <Footer />
        </main>
    )
}

export default App;
