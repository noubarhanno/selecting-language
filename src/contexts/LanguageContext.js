import React from "react";

const Context = React.createContext("english");

export class LanguageStore extends React.Component {
  state = { language: "english" };

    onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

//Context must be Capital C
// call back function should be arrow function
export default Context;
