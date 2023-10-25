import { Component } from "react";

import Seat from "../seat";
import ProceedButton from "../proceedButton";

import "./index.css";

class SeatLayout extends Component {
  state = { seatsData: [], selectedSeats: [] };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const url = "http://localhost:3000/seats/";
    const response = await fetch(url);

    const data = await response.json();
    const modifiedData = data.map((eachSeat) => ({
      seatId: eachSeat.seat_id,
      seatType: eachSeat.seat_type,
      seatStatus: eachSeat.seat_status,
    }));

    this.setState({ seatsData: modifiedData });
  };

  selectSeat = (id) => {
    this.setState((prevState) => {
      if (prevState.selectedSeats.includes(id) !== true) {
        return { selectedSeats: [...prevState.selectedSeats, id] };
      }
      return { selectedSeats: prevState.selectedSeats };
    });
  };

  onProceedButton = () => {
    this.setState({ selectedSeats: [] });
    this.getData();
  };

  renderPremiumSeats = () => {
    const { seatsData, selectedSeats } = this.state;
    return (
      <div className="seat-layout-class-container">
        <p className="seat-layout-class-cost">Premium Class-Rs 450.00</p>
        <hr className="seat-layout-hr-line" />
        <ul className="seat-layout-seats-list">
          {seatsData.map((eachSeat) => {
            if (eachSeat.seatType === "PREMIUM") {
              return (
                <Seat
                  seat={eachSeat}
                  key={eachSeat.seatId}
                  selectSeat={this.selectSeat}
                  selectedSeats={selectedSeats}
                />
              );
            }
            return null;
          })}
        </ul>
      </div>
    );
  };
  renderStandardSeats = () => {
    const { seatsData, selectedSeats } = this.state;
    return (
      <div className="seat-layout-class-container">
        <p className="seat-layout-class-cost">Standard Class-Rs 200.00</p>
        <hr className="seat-layout-hr-line" />
        <ul className="seat-layout-seats-list">
          {seatsData.map((eachSeat) => {
            if (eachSeat.seatType === "STANDARD") {
              return (
                <Seat
                  seat={eachSeat}
                  key={eachSeat.seatId}
                  selectSeat={this.selectSeat}
                  selectedSeats={selectedSeats}
                />
              );
            }
            return null;
          })}
        </ul>
      </div>
    );
  };

  render() {
    const { selectedSeats } = this.state;
    return (
      <div className="seat-layout-container">
        <div className="seat-layout-timings-container">
          <div className="seat-layout-time-theater selected">
            <p className="seat-layout-time">11.30 AM</p>
            <p className="seat-layout-time">IMAX</p>
          </div>
          <div className="seat-layout-time-theater">
            <p className="seat-layout-time">02.30 PM</p>
            <p className="seat-layout-time">IMAX</p>
          </div>
        </div>
        <div className="seat-layout-content-container">
          {this.renderPremiumSeats()}
          {this.renderStandardSeats()}
          <ProceedButton
            selectedSeats={selectedSeats}
            onProceedButton={this.onProceedButton}
          />
        </div>
      </div>
    );
  }
}

export default SeatLayout;
