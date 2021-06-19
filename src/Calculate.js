import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCurrencies, calculate, updateValues } from "./store/actions/currenciesActions";

class Calculate extends Component {
  componentDidMount() {
    this.props.fetchCurrencies();
  }

  render() {

    const { currencies, loading, error, from, to, amount, calc } = this.props;
    return (
      <form 
      onSubmit={calculate(from,to,amount)}
      >
      <div className="mainform">
      
        {loading && <div>LOADING...</div>}
        {error && <div>{error}</div>}
        <span>Convert</span>
        <div className="d-flex">
        <input 
          type="number" 
          step="0.01"
          min='0.01'
          onChange={updateValues(from,to,amount)}
        />
        <select 
         name="from"
         className="w-100"
         onChange={updateValues(from,to,amount)}
        >
          <option value="" key="" disabled defaultValue hidden></option>
          {Object.values(currencies).map(cur => (
            <option value={cur.id} key={cur.id}>{cur.id}</option>
          ))}
        </select>
        </div>
        <span>to</span>
        <select name="to"
        onChange={updateValues(from,to,amount)}
        >
          <option value="" key="" disabled defaultValue hidden>Select curency</option>
          {Object.values(currencies).map(cur => (
            <option value={cur.id} key={cur.id}>{cur.id}</option>
          ))}
        </select>
        <input type="button" value="Transform" 
        onClick={calculate(from,to,1)}
         />
      
      {calculate && <div>{calculate}</div>}
      </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  const { currencies, loading, error, from, to, amount, calc } = state.currencies;
  return {
    currencies, 
    loading, 
    error, 
    from, 
    to, 
    amount,
    calc
  };
};

export default connect(
  mapStateToProps,
  {
    fetchCurrencies,
    calculate,
    updateValues
  }
)(Calculate);
