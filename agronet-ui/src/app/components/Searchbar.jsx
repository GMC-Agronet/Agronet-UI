import { Box, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{ display: 'flex', width:'90%', margin:'5% auto', alignItems: 'center', p: 1, mt: 2, mb: 4 }}
    >
      <SearchIcon sx={{ mx: 1 }} />
      <InputBase fullWidth placeholder="Search..." />
    </Paper>
  );
}