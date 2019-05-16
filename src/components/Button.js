import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component{
    render(){
        return (
            <button className="ui button primary">
                <LanguageContext.Consumer>
                    {(value) => value === 'english' ? 'Submit' : 'Voorleggen' }
                </LanguageContext.Consumer>
            </button>
        );
    }
}

// alternatively we can write the context type as per the below line instead of defining the context type inside the Button class
// Button.contextType = LanguageContext;

export default Button;