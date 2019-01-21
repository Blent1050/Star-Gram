import React, { Component } from "react";
import ReactDOM from "react-dom";
import StarwarsCardsContainer from "./components/StarwarsCardsContainer";
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
        <StarwarsCardsContainer starwarsData={this.state.starwarsData} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
