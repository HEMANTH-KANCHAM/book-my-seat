import "./index.css";
const Seat = (props) => {
  const { seat, selectSeat, selectedSeats } = props;
  const { seatId, seatStatus, seatType } = seat;
  const isSelected = selectedSeats.includes(seatId) ? "selected" : "";

  const statusClass = seatStatus === "AVAILABLE" ? "" : "unavailable";

  const onSeatSelect = () => {
    selectSeat(seatId);
  };

  return (
    <li className="seat-item">
      <button
        className={`seat-button ${statusClass} ${isSelected}`}
        type="button"
        onClick={onSeatSelect}
      >
        {seatId}
      </button>
    </li>
  );
};

export default Seat;
