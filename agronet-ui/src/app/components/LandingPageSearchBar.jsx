import React from 'react';
import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';


const LandingPageSearchBar = () => {
return <Box mt={3}>
          <TextField
            fullWidth
            placeholder="Search products here"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <MicIcon />
                  </IconButton>
                </InputAdornment>
              ),
              sx: { bgcolor: 'white', borderRadius: 4 },
            }}
          />
        </Box>
}
export default LandingPageSearchBar;