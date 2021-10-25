// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import Header from "./Header";
// import Typography from "@mui/material/Typography";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import { LeftSideForm } from "./LeftSideForm";
// import { RightSideForm } from "./RightSideForm";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// export default function MainContain() {
//   return (
//     <>
//       <Header />

//       {/* <Grid container spacing={0}>
//         <Grid item xs={6} style={{ margin: 30 }}>
//           <Typography>Entry</Typography>
//           <Typography>Process</Typography>
//           <FormControl component="fieldset">
//             <RadioGroup
//               aria-label="process"
//               defaultValue="BreakDown"
//               name="radio-buttons-group"
//             >
//               <FormControlLabel
//                 value="BreakDown"
//                 control={<Radio />}
//                 label="BreakDown"
//               />
//               <FormControlLabel value="Trim" control={<Radio />} label="Trim" />
//             </RadioGroup>
//           </FormControl>
//           <LeftSideForm />
//         </Grid>
//         <Grid item xs={6}>
//             <LeftSideForm/>
//         </Grid>
//       </Grid> */}

//       <Grid
//         container
//         rowSpacing={1}
//         columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//         style={{ marginTop: 30, marginLeft: 20, width: "90%" }}
//       >
//         <Grid item xs={6}>
//           <LeftSideForm />
//         </Grid>
//         <Grid item xs={6} style={{ marginTop: 30 }}>
//           <RightSideForm />
//         </Grid>
//       </Grid>
//     </>
//   );
// }
