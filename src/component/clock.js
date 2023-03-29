/*==================================================
/src/component/clock.js
==================================================*/
import React from "react";

// *** Reference: REACT DOC SECTION 5 - State and Lifecycle ***
// --- Ticking Clock (Lifecycle Method) ---
// --- Add Lifecycle Method ---
// React class component "Clock"
class Clock extends React.Component {
  // Local State called "date"
  constructor(props) {  // Initialize state object
    super(props);
    this.state = {date: new Date()};  // Initialize this.state
  }
  // Lifecycle method to start timer after rendering component in HTML DOM
  componentDidMount() {
    // Invoke "tick" function to update time every 1 second 
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );  
  }
  // Lifecycle method to stop timer
  componentWillUnmount() {
    alert("componentWillUnmount");
    clearInterval(this.timerID);
  }
  // Method to get new time & update State
  tick() {
    this.setState({      
      date: new Date()    
    });  
  }

  // Return (render) React element
  render() {  
    return (
      <div>
        <h1>--- "Ticking Clock" App using React Class Component ---</h1>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
