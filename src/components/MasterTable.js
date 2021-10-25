import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
  flower,
  weight,
  min,
  lost,
  dry,
  speed
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    flower,
    weight,
    min,
    lost,
    dry,
    speed,
  };
}

export default function MasterTable({ values }) {
  const rows = [
    createData(
      values.dry,
      values.date,
      values.ph2,
      values.ph3,
      values.strain,
      values.flower,
      values.weight,
      values.minutes,
      values.lostBuds,
      values.dryWaste,
      values.speedSettings
    ),

    // createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  ];
  const clickHandler = () => {
    window.location.reload();
  };
  return (
    <>
      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Dry Room (Phase)</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Operator (PH2)</StyledTableCell>
              <StyledTableCell align="right">Operator (PH3)</StyledTableCell>
              <StyledTableCell align="right">Strain</StyledTableCell>
              <StyledTableCell align="right">Flower Room</StyledTableCell>
              <StyledTableCell align="right">Weight (Grams)</StyledTableCell>
              <StyledTableCell align="right">Minutes</StyledTableCell>
              <StyledTableCell align="right">Lost Buds</StyledTableCell>
              <StyledTableCell align="right">Dry Waste</StyledTableCell>
              <StyledTableCell align="right">Speed Settings</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.flower}
                </StyledTableCell>
                <StyledTableCell align="right">{row.weight}</StyledTableCell>
                <StyledTableCell align="right">{row.min}</StyledTableCell>
                <StyledTableCell align="right">{row.lost}</StyledTableCell>
                <StyledTableCell align="right">{row.dry}</StyledTableCell>
                <StyledTableCell align="right">{row.speed}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Button
          id="demo-customized-button"
          aria-controls="demo-customized-menu"
          aria-haspopup="true"
          variant="contained"
          disableElevation
          style={{
            backgroundColor: "#00396b",
            marginTop: 20,
            marginBottom: 30,
          }}
          onClick={() => clickHandler()}
        >
          Back
        </Button>
      </div>
    </>
  );
}
