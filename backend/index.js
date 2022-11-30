const express = require("express");
const bodyParser = require("body-parser");
const routesHandler = require("./routes/handler.js");
// const pool = require("./config/db.js");
require("dotenv/config");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routesHandler);

// pool.getConnection((err, conn) => {
//   if (err) throw err;
//   const query = `INSERT INTO users(email,firstname,lastname, password, userType, country, city, address) VALUES(?,?,?,?,?,?,?,?)`;
//   conn.query(
//     query,
//     [
//       "mjbrom10@outlook.com",
//       "mark",
//       "brom",
//       "testing1234",
//       "admin",
//       "USA",
//       "Iowa city",
//       "101 south clinton street",
//     ],
//     (err, result) => {
//       conn.release();
//       if (err) throw err;
//       console.log(result);
//     }
//   );
// });

/*
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'frontend/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'frontend/build', routesHandler));
    });
}
*/

const PORT = process.env.PORT || 4000; // backend routing port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
