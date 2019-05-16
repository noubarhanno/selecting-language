import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {value => (value === "english" ? "Submit" : "Voorleggen")}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

// alternatively we can write the context type as per the below line instead of defining the context type inside the Button class
// Button.contextType = LanguageContext;

export default Button;
