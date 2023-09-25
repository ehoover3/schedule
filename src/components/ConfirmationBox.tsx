import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { PDFDocument } from "pdf-lib";
import downloadPDF from "../utils/misc/downloadPDF";
import Grid from "@mui/material/Grid";
import drawPage from "../utils/misc/drawPage";

export default function ConfirmationBox({
  openConfirmationBox,
  setOpenConfirmationBox,
  variables,
  formData,
  setFormData,
  currentDate,
  setTimer,
}: any) {
  const handleClose = () => {
    setOpenConfirmationBox(false);
  };

  const generatePDF = async () => {
    setOpenConfirmationBox(false);
    let myVariables = variables;
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([792, 612]); // 8.5 inch by 11 inch
    await drawPage(page, myVariables, formData.residualRenalFunction, formData.createdBy);
    await downloadPDF(pdfDoc);

    setFormData({
      patientMedicalRecordNumber: "",
      residualRenalFunction: undefined,
      today: currentDate,
      createdBy: "",
      checkboxChecked: false,
    });

    setTimer(180);
  };

  return (
    <div>
      <Dialog open={openConfirmationBox} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>{"Is this correct?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            <Grid container spacing={1.5}>
              {/* <Grid item xs={3}>
                Patient MRN
              </Grid>
              <Grid item xs={9}>
                {formData.patientMedicalRecordNumber}
              </Grid> */}

              <Grid item xs={3}>
                RRF Kt/V
              </Grid>
              <Grid item xs={9}>
                {formData.residualRenalFunction}
              </Grid>

              <Grid item xs={3}>
                1st Dose Date
              </Grid>
              <Grid item xs={9}>
                {formData.today && formData.today.toString() !== "Invalid Date" ? (
                  <div>
                    {new Date(formData.today).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </div>
                ) : (
                  <div></div>
                )}
              </Grid>

              <Grid item xs={3}>
                Created By
              </Grid>
              <Grid item xs={9}>
                {formData.createdBy}
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Go Back</Button>
          <Button onClick={generatePDF} autoFocus>
            Create PDF
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
