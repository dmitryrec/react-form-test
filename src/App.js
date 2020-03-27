import React, { Component } from 'react';
import './App.css';

import { data } from './data';
import TextInput from './components/text-input';
import SelectInputBuyers from './components/select-input-buyers';
import SelectInputUsers from './components/select-input-users'
import Header from './components/header';

export default class App extends Component {

  state = {
      text1: '',
      text2: '',
      text3: '',
  };

  handleInputChange = ({ target: {value} }) => {
    this.setState({
      text1: value,
      text2: value,
      text3: value,
    })
  };

  handleReset = (e) => {
    e.preventDefault();
    const { text1, text2, text3 } = this.state;

    this.setState({
      text1: '',
      text2: '',
      text3: '',
    })
  }

  render () {
    const { text1, text2, text3 } = this.state;

    return (
      <div className='container'>
        <Header/>
        <form className='form-container'>
          <SelectInputBuyers {...data}/>
          <SelectInputUsers {...data}/>
          <TextInput onChange={this.handleInputChange} value={text1}/>
          <TextInput onChange={this.handleInputChange} value={text2}/>
          <TextInput onChange={this.handleInputChange} value={text3}/>
          <div className='btn-block'>
            <button onClick={this.handleReset}>Reset</button>
            <button>Filter</button>
          </div>
        </form>
      </div>
      
    );
  }
  
}

