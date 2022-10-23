import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./Components/Header";
import Body from "./Components/Body.js";
import Footer from "./Components/Footer";
import "./styling/App.css";

function App(){
    return (
        <div >
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default App;
