import React, { Component } from "react";
import ReactDOM from "react-dom";

//Components
import NavBar from "./components/Navigation/NavBar";
import StarwarsCardsContainer from "./components/CharacterComponents/StarwarsCardsContainer";
import ATBackground from "./components/ATBackground";

//Styles
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsData: []
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people");
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsData: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <ATBackground />
        <StarwarsCardsContainer starwarsData={this.state.starwarsData} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
