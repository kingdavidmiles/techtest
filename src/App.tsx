import React, { FC, useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import Axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};
const SearchDrugs: React.FC = () => {
  // handling Modal
  const [open, setOpen] = React.useState(false);
  const oppenModal = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // handling modal end
  const [input, setInput] = React.useState({
    fullName: "",
    country: "",
    gender: "",
    device: "",
  });
  const [isDisabled, setDisabled] = useState(false);
  const saveInput = (e: any) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  // fatching data from api
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //   unmount fatch all users from api
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await Axios.get(
          "http://localhost:3000/users"
        );
        setData(response);
      } catch (error) {
        console.error("error");
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // addUser data
  const addUser = () => {
    let addUser = data;
    addUser.unshift({ ...input });

    setData([...data]);
    console.log(...data);
    handleClose();
    setDisabled(true);
  };

  //   delete a user from table
  const handleRemoveItem = (item: any) => {
    let delUser = data;
    delUser.splice(item, 1);
    setData([...delUser]);
  };
  // End
  return (
    <div className="App">
      {JSON.stringify(data)}
      <Grid container spacing={1}>
        <Grid item xs={12} md={2}>
          {" "}
        </Grid>
        <Grid item xs={12} md={8}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/* Modal card  */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Add new user
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <TextField
                    value={input.fullName}
                    placeholder="fullName"
                    name="fullName"
                    onChange={saveInput}
                    label="fullName"
                    type="text"
                  />
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <TextField
                    value={input.country}
                    name="country"
                    onChange={saveInput}
                    label="country"
                    placeholder="country"
                    type="text"
                  />
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <TextField
                    value={input.gender}
                    placeholder="Gender"
                    label="gender"
                    name="gender"
                    onChange={saveInput}
                    type="text"
                  />
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <TextField
                    value={input.device}
                    label="device"
                    placeholder="device"
                    onChange={saveInput}
                    name="device"
                    type="text"
                  />
                </Typography>
                <Button
                  onClick={addUser}
                  disabled={
                    input.fullName === "" ||
                    input.country === "" ||
                    input.device === ""
                      ? true
                      : false
                  }
                >
                  add
                </Button>
              </Box>
            </Modal>
            {/* Modal card End */}
            {data.length > 0 ? (
              <div>
                {/* user data table start here */}
                <TableContainer component={Paper} sx={{ width: 900 }}>
                  <Table sx={{ width: 900 }}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Full Name</TableCell>
                        <TableCell align="right">Country</TableCell>
                        <TableCell align="right">Gender</TableCell>
                        <TableCell align="right">Device</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data &&
                        data.flatMap((user: any, index) => (
                          <TableRow
                            key={index}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {user.name}
                            </TableCell>
                            <TableCell align="right">{user.country}</TableCell>
                            <TableCell align="right">{user.gender}</TableCell>
                            <TableCell align="right">{user.device}</TableCell>
                            {/* button for deleting */}
                            <Button onClick={() => handleRemoveItem(user)}>
                              del
                            </Button>
                            {/* End */}
                            {/* button for adding user */}

                            <Button onClick={oppenModal}>Add</Button>
                            {/* End */}
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            ) : (
              <div>sorry no user avalible at the main time</div>
            )}
          </header>
        </Grid>
        <Grid item xs={12} md={2}>
          {" "}
        </Grid>
      </Grid>
    </div>
  );
};
export default SearchDrugs;
