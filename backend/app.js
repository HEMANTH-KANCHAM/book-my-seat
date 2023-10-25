const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

const cors = require("cors");

const databasePath = path.join(__dirname, "seatsData.db");

const app = express();

app.use(cors());
app.use(express.json());

let database = null;

const initializeDbAndServer = async () => {
  try {
    database = await open({
      filename: databasePath,
      driver: sqlite3.Database,
    });

    app.listen(3000, () =>
      console.log("Server Running at http://localhost:3000/")
    );
  } catch (error) {
    console.log(`DB Error: ${error.message}`);
    process.exit(1);
  }
};

initializeDbAndServer();

app.get("/seats/", async (request, response) => {
  const getSeatsQuery = `
    SELECT
      *
    FROM
      seats
    ORDER BY 
      seat_id;`;
  const seatsArray = await database.all(getSeatsQuery);
  response.send(seatsArray);
});

app.post("/seats/:seatId", async (request, response) => {
  const { seatId } = request.params;
  const postSeatsQuery = `
    UPDATE SEATS
    SET SEAT_STATUS="UNAVAILABLE"
    WHERE SEAT_ID = ${seatId}
    `;
  await database.run(postSeatsQuery);
  response.send("succuss");
});
