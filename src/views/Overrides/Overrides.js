import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
       
        color: 'white',
        height: 48,
     
      },
    },
  },
});

function Overrides() {
  return (
    <ThemeProvider theme={theme}>
      <h2>Overrides CSS</h2>
    </ThemeProvider>
  );
}

export default Overrides;