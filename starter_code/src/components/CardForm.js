import React from 'react';
import TextInput from './TextInput.js'
import 'react-select/dist/react-select.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ticker: '', startDate: undefined, endDate: undefined};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handletickerChange = this.handletickerChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);

  }

  handletickerChange(value) {
    this.setState({ticker: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.ticker, this.state.startDate, this.state.endDate);
  }

  handleStartDateChange(startDate) {
    this.setState({startDate: startDate});
  }

  handleEndDateChange(endDate) {
    this.setState({endDate: endDate});
  }

  render() {
    return (
      <form className='card-form'>
        <h3>Filter</h3>
        <TextInput name='ticker' label='Stock Ticker' value={this.state.ticker} onChange={this.handletickerChange}/>
        <p>Start Date</p>
        <DatePicker selected={this.state.startDate} onChange={this.handleStartDateChange} />
        <br /><br />
        <p>End Date</p>
        <DatePicker selected={this.state.endDate} onChange={this.handleEndDateChange} />
        <br /><br />
        <button className='btn btn-primary' onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default CardForm;
