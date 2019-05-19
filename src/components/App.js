import React from "react";
import UserCreat from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          {/* doent matter if we wrap the colorContext first then LanguageContext or the LanguageContext first then the Color Context
        this example of passing multiple context values to the nested child component */}
          <ColorContext.Provider value="red">
            <UserCreat />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
