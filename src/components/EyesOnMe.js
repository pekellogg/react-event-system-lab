import React from 'react';

export default class EyesOnMe extends React.Component {

  handleInputPassword = () => console.log("Entering password...")
  
  onFocus = () => console.log("Good!");

  onBlur = () => console.log("Hey! Eyes on me!");

  render() {
    return (
      <button onFocus={ this.onFocus } onBlur={ this.onBlur }>
        Eyes on me, please!
      </button>
    )
  }

}