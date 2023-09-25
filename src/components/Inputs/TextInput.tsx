import TextField from "@mui/material/TextField";

function Input_Text({ state, setState, label }: any) {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.slice(0, 65); // Limit input to 65 characters
    setState(newValue);
  };

  return (
    <TextField
      fullWidth
      label={label}
      variant='outlined'
      value={state}
      onChange={handleOnChange}
      inputProps={{ maxLength: 65 }}
      sx={{ bgcolor: "#ffffff" }}
    />
  );
}

export default Input_Text;
