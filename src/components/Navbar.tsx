import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import Box from "@mui/material/Box";

function Navbar() {
  return (
    <Box width='100%'>
      <AppBar position='relative'>
        <Toolbar>
          <LocalHospitalIcon sx={{ mr: 2 }} />
          <Typography variant='h6' color='inherit' noWrap>
            Lab Draw and Vancomycin Administration Schedule
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
