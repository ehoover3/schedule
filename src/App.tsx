import "./App.css";
import { useEffect, useState } from "react";

// Utils
import getVariables from "./utils/misc/getVariables";

// Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ConfirmationBox from "./components/ConfirmationBox";
import TextInput from "./components/Inputs/TextInput";
import DateInput from "./components/Inputs/DateInput";
import Disclaimer from "./components/Disclaimer";
import NumberInput from "./components/Inputs/NumberInput";
import TESTING from "./components/TESTING";

// MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

// Misc
import dayjs from "dayjs";

const defaultTheme = createTheme();

function App() {
  const currentDate = dayjs();
  const [timer, setTimer] = useState(180);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const [formData, setFormData] = useState({
    patientMedicalRecordNumber: "",
    residualRenalFunction: undefined,
    today: currentDate,
    createdBy: "",
    checkboxChecked: false,
  });

  const [openConfirmationBox, setOpenConfirmationBox] = useState(false);

  const resetTimerAndData = () => {
    setTimer(180);
    setFormData({
      patientMedicalRecordNumber: "",
      residualRenalFunction: undefined,
      today: currentDate,
      createdBy: "",
      checkboxChecked: false,
    });
  };

  useEffect(() => {
    let interval: any;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else resetTimerAndData();
    return () => clearInterval(interval);
  }, [timer]);

  const handleCheckboxChange = (event: any) => {
    setFormData({ ...formData, checkboxChecked: event.target.checked });
  };

  const [variables, setVariables] = useState<any>({
    baseVariables: {},
    month1Name: "Error",
    month2Name: "Error",
    month1YearNumber: 0,
    month2YearNumber: 0,
    month1Day1Weekday: "Error",
    month2Day1Weekday: "Error",
    month1DaysCount: 0,
    month2DaysCount: 0,
    cellNumbers: [],
    cellText: [],
    today_day: 0,
  });

  useEffect(() => {
    const updateVariables = async () => {
      const variables = await getVariables(formData.today, formData.residualRenalFunction, formData.createdBy);
      setVariables(variables);
    };
    updateVariables();
  }, [formData.today, formData.residualRenalFunction]);

  const handleClickOpen = () => {
    if (formData.residualRenalFunction && formData.today && formData.createdBy && formData.checkboxChecked) {
      setOpenConfirmationBox(true);
      setFeedbackMessage("");
    } else {
      setFeedbackMessage("Please fill in all fields and check the checkbox to proceed.");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Navbar />
      <ConfirmationBox
        openConfirmationBox={openConfirmationBox}
        setOpenConfirmationBox={setOpenConfirmationBox}
        variables={variables}
        formData={formData}
        setFormData={setFormData}
        currentDate={currentDate}
        setTimer={setTimer}
      />

      <Box sx={{ height: "100vh", bgcolor: "#f7f7f7", pt: 8, pb: 6 }}>
        <Container maxWidth='sm'>
          <Header />
          <FormControl>
            <Grid container spacing={1.5}>
              <Grid item xs={12}>
                <div>To safeguard data, this form resets in {timer} seconds</div>
              </Grid>

              <Grid item xs={12}>
                <NumberInput
                  residualRenalFunction={formData.residualRenalFunction}
                  setResidualRenalFunction={(value: any) => setFormData({ ...formData, residualRenalFunction: value })}
                />
              </Grid>

              <Grid item xs={12}>
                <DateInput today={formData.today} setToday={(value: any) => setFormData({ ...formData, today: value })} />
              </Grid>

              <Grid item xs={12}>
                <TextInput
                  state={formData.createdBy}
                  setState={(value: any) => setFormData({ ...formData, createdBy: value })}
                  label={"Enter Your Name (Employee Submitting This Form)"}
                />
              </Grid>
              <Grid item xs={12}>
                <Disclaimer />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox checked={formData.checkboxChecked} onChange={handleCheckboxChange} />}
                  label="I have read and agree to this website's disclaimer and terms of use."
                />
              </Grid>

              <Grid item xs={12}>
                <Button fullWidth variant='contained' onClick={handleClickOpen}>
                  Generate PDF
                </Button>
              </Grid>

              <Grid item xs={12}>
                <div style={{ color: "red" }}>{feedbackMessage}</div>
              </Grid>
            </Grid>
          </FormControl>
          {/* <TESTING formData={formData} variables={variables} /> */}
        </Container>
        <footer style={{ textAlign: "center" }}>&copy; 2023 Eric Hoover. All Rights Reserved.</footer>
      </Box>
    </ThemeProvider>
  );
}
export default App;
