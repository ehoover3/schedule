import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Header() {
  return (
    <Box width='100%'>
      <div style={{ fontWeight: "bold", fontSize: 26, color: "red", display: "flex", flexDirection: "column", textAlign: "center" }}>
        <span>THIS WEBSITE IS A PROOF OF CONCEPT </span>
        <span>AND IS NOT INTENDED FOR MEDICAL USE</span>
      </div>
      <Typography component='h1' variant='h2' align='center' color='text.primary' gutterBottom>
        Administration Schedule
      </Typography>
    </Box>
  );
}

export default Header;
