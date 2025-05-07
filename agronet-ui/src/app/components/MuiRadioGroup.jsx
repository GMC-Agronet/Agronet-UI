import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

export default function MuiRadioGroup({ label, options, selected, onChange }) {
  return (
    <FormControl component="fieldset" sx={{ width: '100%', mt: 2 }}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup value={selected} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}