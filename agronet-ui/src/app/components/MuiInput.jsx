import { TextField } from '@mui/material';

export default function MuiInput({ label, type, value, onChange }) {
  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      variant="outlined"
      margin="normal"
    />
  );
}