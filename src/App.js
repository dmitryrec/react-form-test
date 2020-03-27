import React, { Component } from 'react';
import './App.css';

import { data } from './data';
import TextInput from './components/text-input/text-input';
import SelectInput from './components/select-input/select-input';

export default class App extends Component {

  state = {
      text1: '',
      text2: '',
      text3: '',
  };

  handleInputChange = ({ target: {value} }) => {
    this.setState( {
      text1: value,
      text2: value,
      text3: value,
    })
  };

  render () {
    return (
      <form>
        <SelectInput {...data}/>
        <TextInput onChange={this.handleInputChange} value={this.state.text1}/>
        <TextInput onChange={this.handleInputChange} value={this.state.text2}/>
        <TextInput onChange={this.handleInputChange} value={this.state.text3}/>
      </form>
    );
  }
  
}

