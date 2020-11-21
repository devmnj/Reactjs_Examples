import React, { Component } from "react";
import Person2 from "./Person2";
class Person1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greetTxt: "",
    };
  
  }

 
//As a class property
  greetPerson1=(greet)=> {
    this.setState({ greetTxt: greet });
  }

  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        He/She told : {this.state.greetTxt}
  
<Person2
          name="Adithi"
          rel="Father"
          greetHim={this.greetPerson1}
        />
        <Person2
          name="Sheena"
          rel="Brother"
          greetHim={this.greetPerson1}
        />

      </div>
    );
  }
}
export default Person1;
