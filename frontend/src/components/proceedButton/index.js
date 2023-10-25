import "./index.css";

const ProceedButton = (props) => {
  const { selectedSeats, onProceedButton } = props;
  const proceedButton = () => {
    selectedSeats.map(async (eachId) => {
      const url = `http://localhost:3000/seats/${eachId}/`;
      const options = {
        method: "POST",
      };
      await fetch(url, options);
    });

    onProceedButton();
  };
  return (
    <div className="proceed-button-container">
      <button type="button" className="proceed-button" onClick={proceedButton}>
        Proceed
      </button>
    </div>
  );
};

export default ProceedButton;
