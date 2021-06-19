import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCurrencies } from "./store/actions/currenciesActions";
class Calculate extends Component {
  componentDidMount() {
    this.props.fetchCurrencies();
  }

  render() {

    const { currencies, loading, error } = this.props;
    return (
      <form>
        {loading && <div>LOADING...</div>}
        {error && <div>{error}</div>}
        <span>Convert</span>
        <input type="number" step="0.01" />
        <select name="from">
          <option value="" key="" disabled defaultValue hidden></option>
          {Object.values(currencies).map(cur => (
            <option value={cur.id} key={cur.id}>{cur.currencyName}</option>
          ))}
        </select>
        <span>to</span>
        <select name="to">
          <option value="" key="" disabled defaultValue hidden>Select curency</option>
          {Object.values(currencies).map(cur => (
            <option value={cur.id} key={cur.id}>{cur.currencyName}</option>
          ))}
        </select>
        <input 
          type="submit" value="Transform"  />
      </form>
    );
  }
}

const mapStateToProps = state => {
  const { currencies, loading, error } = state.currencies;
  return {
    currencies,
    loading,
    error
  };
};

export default connect(
  mapStateToProps,
  {
    fetchCurrencies,
  }
)(Calculate);
