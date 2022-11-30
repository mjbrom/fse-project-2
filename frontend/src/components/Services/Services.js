import React, { Component } from "react";
// import { Card, ListGroup } from "react-bootstrap";
// import Box from "@mui/material/Box";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import Select from "@mui/material/Select";
import { Button } from "react-bootstrap";
import history from "../../history";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

class Products extends Component {
  constructor() {
    super();
    this.state = {
      openCreate: false,
      evName: "",
      openCreateItem: false,
      itemName: "",
      openDeleteItem: false,
      allItems: [],
      selectedItem: "",
      openModifyItem: false,
      updateItem: "",
      openRequests: false,
      allEvents: [],
      selectedEvent: "",
      numRequested: 0,
      openDonor: false,
      allResponses: [],
      allRequests: [],
    };
    this.getItems();
    this.getEvents();
    console.log(window.localStorage.getItem("user"));
  }

  getItems = async () => {
    const items = await fetch("/items");
    const data = await items.json();
    this.setState({ allItems: data });
    window.localStorage.setItem("items", JSON.stringify(data));
    console.log(data);
  };

  getEvents = async () => {
    const events = await fetch("/events");
    const data = await events.json();
    this.setState({ allEvents: data });
    window.localStorage.setItem("events", JSON.stringify(data));
    console.log(data);
  };

  getResponses = async () => {
    const responses = await fetch("/responses");
    const data = await responses.json();
    this.setState({ allResponses: data });
    window.localStorage.setItem("responses", JSON.stringify(data));
    console.log(data);
  };

  getRequests = async () => {
    const requests = await fetch("/requests");
    const data = await requests.json();
    this.setState({ allRequests: data });
    window.localStorage.setItem("requests", JSON.stringify(data));
    console.log(data);
  };

  adminServices = () => {
    // this.getItems();
    // this.getEvents();
    return (
      <div>
        <h2>Admin Page</h2>

        <Button
          variant="btn btn-success"
          onClick={() => this.setState({ openCreate: true })}
        >
          Create Event
        </Button>
        <Modal
          open={this.state.openCreate}
          onClose={() => {
            this.setState({ openCreate: false });
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form
              method="POST"
              action="/addEvent"
              onSubmit={() => {
                alert("Account Created!");
              }}
            >
              {/* add on submit*/}
              <div className="input-container">
                <label>Event Name</label>
                <input
                  name="evName"
                  type="text"
                  value={this.state.evName}
                  onChange={(e) => {
                    this.setState({ evName: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="button-container">
                <input type="submit" />
              </div>
              <br />
            </form>
          </Box>
        </Modal>
        <br />
        <br />
        <Button
          variant="btn btn-success"
          onClick={() => this.setState({ openCreateItem: true })}
        >
          Create Item
        </Button>
        <Modal
          open={this.state.openCreateItem}
          onClose={() => {
            this.setState({ openCreateItem: false });
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form
              method="POST"
              action="/addItem"
              onSubmit={() => {
                alert("Item Created!");
              }}
            >
              {/* add on submit*/}
              <div className="input-container">
                <label>Item Name</label>
                <input
                  name="itemName"
                  type="text"
                  value={this.state.itemName}
                  onChange={(e) => {
                    this.setState({ itemName: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="button-container">
                <input type="submit" />
              </div>
              <br />
            </form>
          </Box>
        </Modal>
        <br />
        <br />
        <Button
          variant="btn btn-success"
          onClick={() => this.setState({ openDeleteItem: true })}
        >
          Delete Item
        </Button>
        <Modal
          open={this.state.openDeleteItem}
          onClose={() => {
            this.setState({ openDeleteItem: false });
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form
              method="POST"
              action="/deleteItem"
              onSubmit={() => {
                alert("Item Deleted!");
              }}
            >
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Item</InputLabel>
                  <Select
                    name="selectedItem"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.selectedItem}
                    label="Item"
                    onChange={(e) => {
                      this.setState({ selectedItem: e.target.value });
                    }}
                  >
                    {this.state.allItems?.map((el) => (
                      <MenuItem value={el.itemName}>{el.itemName}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <div className="button-container">
                <input type="submit" />
              </div>
              <br />
            </form>
          </Box>
        </Modal>
        <br />
        <br />
        <Button
          variant="btn btn-success"
          onClick={() => this.setState({ openModifyItem: true })}
        >
          Modify Item
        </Button>
        <Modal
          open={this.state.openModifyItem}
          onClose={() => {
            this.setState({ openModifyItem: false });
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form
              method="POST"
              action="/updateItem"
              onSubmit={() => {
                alert("Item Updated!");
              }}
            >
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Item</InputLabel>
                  <Select
                    name="selectedItem"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.selectedItem}
                    label="Item"
                    onChange={(e) => {
                      this.setState({ selectedItem: e.target.value });
                    }}
                  >
                    {this.state.allItems?.map((el) => (
                      <MenuItem value={el.itemName}>{el.itemName}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <div className="input-container">
                <label>New Name</label>
                <input
                  name="updateItem"
                  type="text"
                  value={this.state.updateItem}
                  onChange={(e) => {
                    this.setState({ updateItem: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="button-container">
                <input type="submit" />
              </div>
              <br />
            </form>
          </Box>
        </Modal>
        <br />
        <br />
        <Button
          variant="btn btn-success"
          onClick={() => history.push("/homepage")}
        >
          Back Home
        </Button>
      </div>
    );
  };

  recipServices = () => {
    // this.getItems();
    // this.getEvents();
    return (
      <div>
        <h2>Recipient Page</h2>
        <Button
          variant="btn btn-success"
          onClick={() => this.setState({ openRequests: true })}
        >
          Create Request
        </Button>
        <Modal
          open={this.state.openRequests}
          onClose={() => {
            this.setState({ openRequests: false });
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form
              method="POST"
              action="/createReq"
              onSubmit={() => {
                alert("Item Updated!");
              }}
            >
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-labe3l">Event</InputLabel>
                  <Select
                    name="selectedEvent"
                    labelId="demo-simple-select-labe3l"
                    id="demo-simple-select3"
                    value={this.state.selectedEvent}
                    label="Event"
                    onChange={(e) => {
                      this.setState({ selectedEvent: e.target.value });
                    }}
                  >
                    {this.state.allEvents?.map((el) => (
                      <MenuItem value={el.eventName}>{el.eventName}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-labe2l">Item</InputLabel>
                  <Select
                    name="selectedItem"
                    labelId="demo-simple-select-labe2l"
                    id="demo-simple-select2"
                    value={this.state.selectedItem}
                    label="Item"
                    onChange={(e) => {
                      this.setState({ selectedItem: e.target.value });
                    }}
                  >
                    {this.state.allItems?.map((el) => (
                      <MenuItem value={el.itemName}>{el.itemName}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <div className="input-container">
                <label>Number</label>
                <input
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  name="numRequested"
                  type="text"
                  value={this.state.numRequested}
                  onChange={(e) => {
                    this.setState({ numRequested: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="button-container">
                <input type="submit" />
              </div>
              <br />
            </form>
          </Box>
        </Modal>
        <br />
        <br />
        <Button
          variant="btn btn-success"
          onClick={() => history.push("/homepage")}
        >
          Back Home
        </Button>
      </div>
    );
  };

  donorServices = () => {
    return (
      <div>
        <h2>Donor Page</h2>
        <Button
          variant="btn btn-success"
          onClick={() => this.setState({ openDonor: true })}
        >
          Create Response
        </Button>
        <Modal
          open={this.state.openDonor}
          onClose={() => {
            this.setState({ openDonor: false });
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form
              method="POST"
              action="/createResp"
              onSubmit={() => {
                alert("Item Updated!");
              }}
            >
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-labe3l">Event</InputLabel>
                  <Select
                    name="selectedEvent"
                    labelId="demo-simple-select-labe3l"
                    id="demo-simple-select3"
                    value={this.state.selectedEvent}
                    label="Event"
                    onChange={(e) => {
                      this.setState({ selectedEvent: e.target.value });
                    }}
                  >
                    {this.state.allEvents?.map((el) => (
                      <MenuItem value={el.eventName}>{el.eventName}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-labe2l">Item</InputLabel>
                  <Select
                    name="selectedItem"
                    labelId="demo-simple-select-labe2l"
                    id="demo-simple-select2"
                    value={this.state.selectedItem}
                    label="Item"
                    onChange={(e) => {
                      this.setState({ selectedItem: e.target.value });
                    }}
                  >
                    {this.state.allItems?.map((el) => (
                      <MenuItem value={el.itemName}>{el.itemName}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <div className="input-container">
                <label>Number</label>
                <input
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  name="numRequested"
                  type="text"
                  value={this.state.numRequested}
                  onChange={(e) => {
                    this.setState({ numRequested: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="button-container">
                <input type="submit" />
              </div>
              <br />
            </form>
          </Box>
        </Modal>
        <br />
        <br />
        <Button
          variant="btn btn-success"
          onClick={() => history.push("/homepage")}
        >
          Back Home
        </Button>
      </div>
    );
  };

  render() {
    if (window.localStorage.getItem("user") === "admin") {
      return (
        <div style={{ display: "flex", justifyContent: "center", padding: 30 }}>
          {this.adminServices()}
        </div>
      );
    } else if (window.localStorage.getItem("user") === "Donor") {
      return (
        <div style={{ display: "flex", justifyContent: "center", padding: 30 }}>
          {this.donorServices()}
        </div>
      );
    } else if (window.localStorage.getItem("user") === "Recipient") {
      return (
        <div style={{ display: "flex", justifyContent: "center", padding: 30 }}>
          {this.recipServices()}
        </div>
      );
    } else {
      history.push("/");
    }
  }
}

export default Products;
