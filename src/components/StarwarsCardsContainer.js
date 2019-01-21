import React, { Component } from "react";
import Character from "./Character";

export default class StarwarsCardsContainer extends Component {
  render() {
    return <Character charInfo={this.props.starwarsData} />;
  }
}
