import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrencies } from "../redux/actions";
import currenciesData from "../data/currencies";

export const withCurrencies = WrappedComponent => {
  class WithCurrencies extends Component {
    componentDidMount() {
      const { onSetCurr } = this.props;
      !!Object.keys(currenciesData).length
        ? onSetCurr(currenciesData)
        : onSetCurr(null);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapDispatchToProps = dispatch => ({
    onSetCurr: currencies => dispatch(setCurrencies(currencies))
  });

  return connect(null, mapDispatchToProps)(WithCurrencies);
};
