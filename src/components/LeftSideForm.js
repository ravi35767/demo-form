import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import "../App.css";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Header from "./Header";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MasterTable from "./MasterTable";
import { genrateSchema } from "../validation";

export default function LeftSideForm() {
  const [openTable, setOpenTable] = useState(true);
  const HandlerCheck = () => {
    setOpenTable(false);
  };

  const initialValues = {
    weight: "",
    minutes: "",
    date: "",
    speedSettings: "",
    dryWaste: "",
    lostBuds: "",
    dry: "test1",
    ph2: "test1",
    ph3: "test1",
    strain: "test1",
    flower: "test1",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: (values, actions) => {
        setOpenTable(false);
      },
      validationSchema: genrateSchema(initialValues),
    });

  return (
    <>
      <Header />
      {openTable ? (
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginTop: 30, marginLeft: 20, width: "90%" }}
        >
          <Grid item xs={6}>
            <div className="container">
              <div>
                <Typography>Entry</Typography>
                <Typography>Process</Typography>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="process"
                    defaultValue="BreakDown"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="BreakDown"
                      control={<Radio />}
                      label="BreakDown"
                    />
                    <FormControlLabel
                      value="Trim"
                      control={<Radio />}
                      label="Trim"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div>
                <div>
                  <label htmlFor>Dry Room (Phase)</label>
                </div>
                <select
                  name="meal"
                  style={{ height: 35, width: "100%" }}
                  name="dry"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dry}
                  touched={touched.dry}
                >
                  <option selected="selected" value="0">
                    Select
                  </option>
                  <option value="test1">test1</option>
                  <option value="test2">test2</option>
                  <option value="test3">test3</option>
                  <option value="test4">test4</option>
                  <option value="test5">test5</option>
                </select>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor>Date</label>
                <input
                  type="date"
                  style={{ width: "25%" }}
                  name="date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.date}
                  touched={touched.date}
                />
              </div>
              <div class="error">{errors.date}</div>
              <br />
              <div>
                <div>
                  <label htmlFor>Operator (PH2)</label>
                  <select
                    name="meal"
                    style={{ height: 35, width: "100%" }}
                    name="ph2"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.ph2}
                    touched={touched.ph2}
                  >
                    <option value="test1">test1</option>
                    <option value="test2">test2</option>
                    <option value="test3">test3</option>
                    <option value="test4">test4</option>
                    <option value="test5">test5</option>
                  </select>
                </div>
                <br />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <a href style={{ marginRight: 8 }}>
                    <AddIcon />
                  </a>
                  <Typography style={{ color: "blue" }}>
                    Add a New option
                  </Typography>
                </div>
              </div>
              <br />
              <div>
                <div>
                  <label htmlFor>Operator (PH3)</label>
                  <select
                    name="meal"
                    style={{ height: 35, width: "100%" }}
                    name="ph3"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.ph3}
                    touched={touched.ph3}
                  >
                    <option value="test1">test1</option>
                    <option value="test2">test2</option>
                    <option value="test3">test3</option>
                    <option value="test4">test4</option>
                    <option value="test5">test5</option>
                  </select>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <a href style={{ marginRight: 8 }}>
                    <AddIcon />
                  </a>
                  <Typography style={{ color: "blue" }}>
                    Add a New option
                  </Typography>
                </div>
              </div>
              <br />
              <div>
                <div>
                  <label htmlFor>Strain</label>
                  <select
                    name="meal"
                    style={{ height: 35, width: "100%" }}
                    name="strain"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.strain}
                    touched={touched.strain}
                  >
                    <option value="test1">test1</option>
                    <option value="test2">test2</option>
                    <option value="test3">test3</option>
                    <option value="test4">test4</option>
                    <option value="test5">test5</option>
                  </select>
                </div>
              </div>
              <br />
              <div>
                <div>
                  <label htmlFor>Flower Room</label>
                  <select
                    name="meal"
                    style={{ height: 35, width: "100%" }}
                    name="flower"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.flower}
                    touched={touched.flower}
                  >
                    <option selected="selected" value="0">
                      Select
                    </option>
                    <option value="test1">test1</option>
                    <option value="test2">test2</option>
                    <option value="test3">test3</option>
                    <option value="test4">test4</option>
                    <option value="test5">test5</option>
                  </select>
                </div>
              </div>
              <br />
              <div>
                <label htmlFor>Weight (Grams)</label>
                <input
                  type="number"
                  name="weight"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.weight}
                  touched={touched.weight}
                />
              </div>

              <div class="error">{errors.weight}</div>
              <div>
                <label htmlFor>Minutes</label>
                <input
                  type="text"
                  name="minutes"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.minutes}
                  touched={touched.minutes}
                />
              </div>
              <div class="error">{errors.minutes}</div>
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
                  onClick={() => handleSubmit()}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} style={{ marginTop: 30 }}>
            <Typography style={{ marginBottom: 15 }}>Waste</Typography>
            <Divider style={{ marginBottom: 15 }} />
            <div style={{ marginBottom: 15 }}>
              <label htmlFor>Lost Buds</label>
              <input
                type="text"
                name="lostBuds"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lostBuds}
                touched={touched.lostBuds}
              />
            </div>
            <div class="error">{errors.lostBuds}</div>
            <div style={{ marginBottom: 15 }}>
              <label htmlFor>Dry Waste</label>
              <input
                type="text"
                name="dryWaste"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dryWaste}
                touched={touched.dryWaste}
              />
            </div>
            <div class="error">{errors.dryWaste}</div>
            <Divider style={{ marginBottom: 15 }} />
            <div>
              <label htmlFor>Speed Settings</label>
              <input
                type="text"
                name="speedSettings"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.speedSettings}
                touched={touched.speedSettings}
              />
            </div>
            <div class="error">{errors.speedSettings}</div>
          </Grid>
        </Grid>
      ) : (
        <MasterTable values={values} />
      )}
    </>
  );
}

export { LeftSideForm };
