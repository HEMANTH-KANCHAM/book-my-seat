import { Component } from "react";
import { IoIosArrowBack } from "react-icons/io";

import "./index.css";

class SelectionLayout extends Component {
  onChangeSeatCount = (event) => {
    const { changeSeatsCount } = this.props;
    changeSeatsCount(event.target.value);
  };

  onChangeSeatType = (event) => {
    const { ChangeSeatType } = this.props;
    ChangeSeatType(event.target.value);
  };

  render() {
    return (
      <div className="selection-container">
        <div className="movie-details-container">
          <IoIosArrowBack className="backward-icon" />
          <div className="movie-theater">
            <h1 className="movie-name">Salaar</h1>
            <p className="theater-details">
              Cinepolis: Nexus Shantinikethan, Bengalore | Today,22 Dec, 6 AM
            </p>
          </div>
        </div>
        <div className="ticket-selection-options">
          <select className="selection" onChange={this.onChangeSeatCount}>
            <option className="option">1</option>
            <option className="option">2</option>
            <option className="option">3</option>
            <option className="option">4</option>
            <option className="option">5</option>
            <option className="option">6</option>
            <option className="option">7</option>
            <option className="option">8</option>
            <option className="option">9</option>
            <option className="option">10</option>
          </select>
          <select className="selection" onChange={this.onChangeSeatType}>
            <option className="option">STANDARD</option>
            <option className="option">PREMIUM</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SelectionLayout;
