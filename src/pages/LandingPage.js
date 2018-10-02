import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withCurrencies } from "../enhancers/withCurrencies";
import { ROUTES } from "../routes";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const LandingPage = () => (
  <div style={styles.container}>
    <h1>Available currencies</h1>
    <DisplayAllCurrencies />
  </div>
);

class DisplayAllCurrenciesComponent extends Component {
  onClick = event => {
    const { history } = this.props;
    history.push({ pathname: `/currencyDetail/${event.target.id}` });
  };

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <Grid container spacing={8}>
          {!!Object.keys(currencies).length ? (
            currencies.map(curr => (
              <Grid key={curr.id} item xs={6} sm={3} md={6}>
                <Paper id={curr.id} onClick={this.onClick}>
                  ID: {curr.id} Type: {curr.attributes.currency_type} Symbol:{" "}
                  {curr.attributes.symbol}
                </Paper>
              </Grid>
            ))
          ) : (
            <h1>No currencies</h1>
          )}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currencies: state.currenciesState.currencies
});

export default LandingPage;

export const DisplayAllCurrencies = compose(
  withRouter,
  withCurrencies,
  connect(mapStateToProps)
)(DisplayAllCurrenciesComponent);

export const styles = {
  container: {
    margin: 10
  },
  item: {
    textAlign: "center"
  }
};
