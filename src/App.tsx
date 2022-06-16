import React, { FC, useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import Axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";

const SearchDrugs: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  const handleRemoveItem = (itemId: any) => {
    setData(data.filter(({ id }) => id !== itemId));
  };

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
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 900,
                height: 60,
                borderRadius: 3,
                border: "1px solid #ced4da",
              }}
            >
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            {data.length > 0 ? (
              <div>
                <TableContainer component={Paper} sx={{ width: 900 }}>
                  <Table sx={{ width: 900 }}>
                    <TableHead>
                      <TableRow>
                        <TableCell>user</TableCell>
                        <TableCell align="right">Country</TableCell>
                        <TableCell align="right">gender</TableCell>
                        <TableCell align="right">device</TableCell>
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
                            <button onClick={handleRemoveItem}>del</button>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            ) : (
              <div>j</div>
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
