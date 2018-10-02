import React, { Component } from "react";
import myJsonFile from "../data/currencies";

export const CurrencyInfoPage = ({ match }) => (
  <div>
    Currency info
    <CurrencyInfoDisplay match={match} />
  </div>
);

class CurrencyInfoDisplay extends Component {
  componentDidMount() {
    const { match } = this.props;
    console.log(match);
    console.log(myJsonFile);
    const result = myJsonFile.filter(item => item.id === "USD");
    console.log(result);
  }

  render() {
    return <div />;
  }
}

export { CurrencyInfoDisplay };
