import logo from './logo.svg';
import './App.css';

//import images
import firstImg from "./images/firstImg.webp";
import animalWorld1 from './images/animal world-1.webp'
import secondImg from './images/secondImg.webp'
import thegame from './images/THE GAME (1).webp'

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
            <img src={animalWorld1} alt="Freedom Blog" />
          </div>
        </div>
      </header>
      <div className="button-div">
        <button>
          <span>White Paper</span>
        </button>
      </div>
      <div className="second-section">
        <div className="second-div">
          <img className="secondImg" src={secondImg} alt="Freedom Blog" />
        </div>
        <div className="first-main">
          <div className="para1">
            <h2>
              ANIMAL WORLD is a dynamic tokenized, environmentally sustainable
              PROJECT IN THE FORM OF futuristic MULTI-CHAIN farM BUILDING game.
              It offers a riveting simulated gameplay iN which a player can
              collect, own, trade and exchange farming assets and winnings. We
              at ANIMAL WORLD are committed towards enabling and building a
              community of ecologically aware individuals who will engage in a
              self-sustainable and ecologically positive farming. The project
              runs on a real-time basis with user-friendly accessibility and
              consistent monitoring. kitchen_footer-desklarge.png
            </h2>
          </div>
          <div className="third-div">
            <img  src={thegame} alt="The-Game"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
