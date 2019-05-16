import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
    renderButton(color){
        return (
            <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {value => (value === "english" ? "Submit" : "Voorleggen")}
            </LanguageContext.Consumer>
          </button>
        );
    }


  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

// alternatively we can write the context type as per the below line instead of defining the context type inside the Button class
// Button.contextType = LanguageContext;

export default Button;
