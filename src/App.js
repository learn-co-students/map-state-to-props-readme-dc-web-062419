import React, { Component } from "react";
import { connect } from "react-redux";
// This is what tricks my component into thinking it actually has props. You can access state by using this.props on the app component
// even though there are no props being directly passed down to the app component. I can only assume that this is going to be the
// same for other components

import "./App.css";

class App extends Component {
  handleOnClick() {
    this.props.dispatch({
      type: "INCREASE_COUNT"
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={event => this.handleOnClick()}>Click</button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { items: state.items };
};
// This function is used to explicity say what items from state i want this component to have. So anytime the "items" section in state
// is changed...then the App component will re-render with the new props it needs. It can do this because connect ultimately returns
// a new component with the new info from the changes and maps it to this component

export default connect(mapStateToProps)(App);
// connect(mapStateToProps) is what is listening for changes in the store. It is connected to the store and gives information to the app
// component continuously. Whenever there is a change in state, connect knows about it and maps the change to props for the component
