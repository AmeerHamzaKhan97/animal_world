import logo from './logo.svg';
import './App.css';

//import images
import firstImg from "./images/firstImg.webp";
import animalWorld1 from './images/animal world-1.webp'
import secondImg from './images/secondImg.webp'

function App() {
  return (
    <div className="App">
      <header>
        <div className="head-text">
          <div className="head-image">
            <img src={firstImg} alt="Freedom Blog" />
          </div>
          <div class="text-on-image">
            {/* <h3> Welcome to my Blog </h3>
            <p> FREEEEDOM </p> */}
            <img src={animalWorld1 } alt="Freedom Blog" />
          </div>
        </div>
      </header>
      <div className="button-div">
      <button ><span>White Paper</span></button>
      </div>
      <div className="second-div">
        <img className="secondImg" src={secondImg} alt = "Freedom Blog"/>
      </div>
    </div>
  );
}

export default App;
