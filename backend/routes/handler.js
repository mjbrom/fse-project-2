const express = require("express");
const router = express.Router();
const pool = require("../config/db.js");
// const reqs = JSON.parse(window.localStorage.getItem("requests"));
// const reps = JSON.parse(window.localStorage.getItem("responses"));

router.get("/users", async (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    try {
      const query = `SELECT u.email, u.firstname, u.lastname, u.password, u.userType, u.country, u.city, u.address FROM users as u`;
      conn.query(query, (err, result) => {
        conn.release();
        if (err) throw err;
        res.send(JSON.stringify(result));
      });
    } catch (err) {
      console.log(err);
      res.end();
    }
  });
});

router.post("/addUser", async (req, res) => {
  const email = req.body.uname;
  const first = req.body.fName;
  const last = req.body.lName;
  const pass = req.body.pass;
  const country = req.body.country;
  const address = req.body.address;
  const city = req.body.city;
  const userType = req.body.userType;
  const userId = 1;
  pool.getConnection((err, conn) => {
    if (err) throw err;
    const qry = `INSERT INTO users(email,firstname,lastname, password, userType, country, city, address) VALUES(?,?,?,?,?,?,?,?)`;
    conn.query(
      qry,
      [email, first, last, pass, userType, country, city, address],
      (err, result) => {
        conn.release();
        if (err) throw err;
        console.log("User added!");
      }
    );
    res.redirect("/");
    res.end();
  });
});
router.post("/addEvent", async (req, res) => {
  const evName = req.body.evName;
  // const first = req.body.fName;
  // const last = req.body.lName;
  // const pass = req.body.pass;
  // const country = req.body.country;
  // const address = req.body.address;
  // const city = req.body.city;
  // const userType = req.body.userType;
  // const userId = 1;
  pool.getConnection((err, conn) => {
    if (err) throw err;
    const qry = `INSERT INTO events(eventName) VALUES(?)`;
    conn.query(qry, [evName], (err, result) => {
      conn.release();
      if (err) throw err;
      console.log("Event added!");
    });
    res.redirect("/Services");
    res.end();
  });
});

router.get("/events", async (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    try {
      const query = `SELECT u.eventName FROM events as u`;
      conn.query(query, (err, result) => {
        conn.release();
        if (err) throw err;
        res.send(JSON.stringify(result));
      });
    } catch (err) {
      console.log(err);
      res.end();
    }
  });
});

router.post("/addItem", async (req, res) => {
  const itemName = req.body.itemName;
  // const first = req.body.fName;
  // const last = req.body.lName;
  // const pass = req.body.pass;
  // const country = req.body.country;
  // const address = req.body.address;
  // const city = req.body.city;
  // const userType = req.body.userType;
  // const userId = 1;
  pool.getConnection((err, conn) => {
    if (err) throw err;
    const qry = `INSERT INTO items(itemName) VALUES(?)`;
    conn.query(qry, [itemName], (err, result) => {
      conn.release();
      if (err) throw err;
      console.log("Item added!");
    });
    res.redirect("/Services");
    res.end();
  });
});

router.get("/items", async (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    try {
      const query = `SELECT u.itemName FROM items as u`;
      conn.query(query, (err, result) => {
        conn.release();
        if (err) throw err;
        res.send(JSON.stringify(result));
      });
    } catch (err) {
      console.log(err);
      res.end();
    }
  });
});

router.post("/deleteItem", async (req, res) => {
  const itemName = req.body.selectedItem;
  // const first = req.body.fName;
  // const last = req.body.lName;
  // const pass = req.body.pass;
  // const country = req.body.country;
  // const address = req.body.address;
  // const city = req.body.city;
  // const userType = req.body.userType;
  // const userId = 1;
  pool.getConnection((err, conn) => {
    if (err) throw err;
    const qry = `DELETE FROM items WHERE itemName = ?`;
    conn.query(qry, [itemName], (err, result) => {
      conn.release();
      if (err) throw err;
      console.log("Item Deleted!");
    });
    res.redirect("/Services");
    res.end();
  });
});

router.post("/updateItem", async (req, res) => {
  const itemName = req.body.selectedItem;
  const updateName = req.body.updateItem;
  // const first = req.body.fName;
  // const last = req.body.lName;
  // const pass = req.body.pass;
  // const country = req.body.country;
  // const address = req.body.address;
  // const city = req.body.city;
  // const userType = req.body.userType;
  // const userId = 1;
  pool.getConnection((err, conn) => {
    if (err) throw err;
    const qry = `UPDATE items SET itemName = ? WHERE itemName = ?`;
    conn.query(qry, [updateName, itemName], (err, result) => {
      conn.release();
      if (err) throw err;
      console.log("Item Updated!");
    });
    res.redirect("/Services");
    res.end();
  });
});

router.post("/createReq", async (req, res) => {
  const eventName = req.body.selectedEvent;
  const itemName = req.body.selectedItem;
  const numReq = req.body.numRequested;
  // let val = reqs.find((el) => {
  //   return el.eventReq === eventName && el.itemReq === itemName;
  // });
  // if (val) {
  //   pool.getConnection((err, conn) => {
  //     if (err) throw err;
  //     const qry = `UPDATE requests SET numReq = numReq + ? WHERE itemReq = ? AND eventReq = ?`;
  //     conn.query(qry, [numReq, itemName, eventName], (err, result) => {
  //       conn.release();
  //       if (err) throw err;
  //       console.log("Item Updated!");
  //     });
  //     res.redirect("/Services");
  //     res.end();
  //   });
  // } else {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    const qry = `INSERT INTO requests(eventReq, itemReq, numReq) VALUES(?,?,?)`;
    conn.query(qry, [eventName, itemName, numReq, numReq], (err, result) => {
      conn.release();
      if (err) throw err;
      console.log("Item Created!");
    });
    res.redirect("/Services");
    res.end();
    // }
  });
});

router.get("/requests", async (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    try {
      const query = `SELECT u.eventReq, u.itemReq, u.numReq FROM requests as u`;
      conn.query(query, (err, result) => {
        conn.release();
        if (err) throw err;
        res.send(JSON.stringify(result));
      });
    } catch (err) {
      console.log(err);
      res.end();
    }
  });
});

router.post("/createResp", async (req, res) => {
  const eventName = req.body.selectedEvent;
  const itemName = req.body.selectedItem;
  const numReq = req.body.numRequested;
  pool.getConnection((err, conn) => {
    if (err) throw err;
    const qry = `INSERT INTO responses(eventDon, itemDon, numDon) VALUES(?,?,?)`;
    conn.query(qry, [eventName, itemName, numReq, numReq], (err, result) => {
      conn.release();
      if (err) throw err;
      console.log("Item Created!");
    });
    // reps.push({ eventDon: eventName, itemDon: itemName });
    res.redirect("/Services");
    res.end();
  });
});

router.get("/responses", async (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;
    try {
      const query = `SELECT u.eventDon, u.itemDon, u.numDon FROM responses as u`;
      conn.query(query, (err, result) => {
        conn.release();
        if (err) throw err;
        res.send(JSON.stringify(result));
      });
    } catch (err) {
      console.log(err);
      res.end();
    }
  });
});

module.exports = router;
