import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component{
    static contextType = LanguageContext;

    render(){
        const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
        return (
            <button className="ui button primary">{text}</button>
        );
    }
}

// alternatively we can write the context type as per the below line instead of defining the context type inside the Button class
// Button.contextType = LanguageContext;

export default Button;