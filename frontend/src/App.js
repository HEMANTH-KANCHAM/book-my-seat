import { Component } from "react";

import SelectionLayout from "./components/selectionLayout";
import SeatLayout from "./components/seatLayout";

import "./App.css";

class App extends Component {
  state = { seatsCount: 1, seatType: "STANDARD" };

  changeSeatsCount = (value) => {
    this.setState({ seatsCount: value });
  };

  ChangeSeatType = (value) => {
    this.setState({ seatType: value });
  };

  render() {
    return (
      <div>
        <SelectionLayout
          changeSeatsCount={this.changeSeatsCount}
          ChangeSeatType={this.ChangeSeatType}
        />
        <SeatLayout />
      </div>
    );
  }
}

export default App;
