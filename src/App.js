import React, { Component } from "react";
import "./App.css";

import { data } from "./data";
import TextInput from "./components/text-input";
import SelectInputBuyers from "./components/select-input-buyers";
import SelectInputUsers from "./components/select-input-users";
import Header from "./components/header";

export default class App extends Component {
  state = {
    textFieldList: [
      { id: "text1", value: "" },
      { id: "text2", value: "" },
      { id: "text3", value: "" }
    ]
  };

  handleInputChange = (value, field) => {
    const { textFieldList } = this.state;
    const idx = textFieldList.findIndex(el => el.id === field);
    const updatedTextList = [
      ...textFieldList.slice(0, idx),
      { id: field, value },
      ...textFieldList.slice(idx + 1)
    ];
    this.setState(() => ({ textFieldList: updatedTextList }));
  };

  handleReset = () => {
    this.setState(() => ({
      textFieldList: [
        { id: "text1", value: "" },
        { id: "text2", value: "" },
        { id: "text3", value: "" }
      ]
    }));
  };

  render() {
    const { textFieldList } = this.state;

    return (
      <div className="container">
        <Header />
        <form className="form-container">
          <SelectInputBuyers {...data} />
          <SelectInputUsers {...data} />
          {textFieldList.map(field => (
            <TextInput
              key={field.id}
              id={field.id}
              onChange={this.handleInputChange}
              value={field.value}
            />
          ))}
          <div className="btn-block">
            <button className="reset-btn" onClick={()=> this.handleReset() }>Reset</button>
            <button className="filter-btn">Filter</button>
          </div>
        </form>
      </div>
    );
  }
}