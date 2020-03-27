import React, { Component } from 'react';
import './App.css';

import { data } from './data';
import TextInput from './components/text-input/text-input';
import SelectInput from './components/select-input/select-input';
import Header from './components/header/header';

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
    const { text1, text2, text3 } = this.state;

    return (
      <div className='container'>
        <Header/>
        <form className='form-container'>
          <SelectInput {...data}/>
          <TextInput onChange={this.handleInputChange} value={text1}/>
          <TextInput onChange={this.handleInputChange} value={text2}/>
          <TextInput onChange={this.handleInputChange} value={text3}/>
          <button>Reset</button>
          <button>Filter</button>
        </form>
      </div>
      
    );
  }
  
}

