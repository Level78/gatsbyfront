import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Divider } from '@material-ui/core';
import { Section, SectionAlternate, } from 'components/organisms';

import { Box } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { Image } from 'components/atoms';
import Dialoguebox from 'components/organisms/Dialoguebox'


import {
 
  Download,
  Hero,

} from './components';











const useStyles = makeStyles(theme => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  shape: {
    background: theme.palette.alternate.main,
    borderBottomRightRadius: '50%',
    borderBottom: `1px solid ${colors.grey[200]}`,
  },
}));

const DesktopApp = () => {
  const classes = useStyles();
 
  return (
    <div>
      <div className={classes.shape}>
        <Section className={classes.pagePaddingTop}>
        <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">
      <SectionHeader
        overline={<Image src="https://ik.imagekit.io/j6phbjneuop/New_Folder/Tanbead_bRGHWU2gY_unYDiY-4i.png" alt="rating" style={{ width: 120, height: 'auto' }} width="auto" />}
        title="Rated 5 out of 5 stars by our customers!"
        subtitle="Companies from across the globe have had fantastic experiences using TANBead Malestrom."
       
      />
    </Box>
       <br/>   
         

         
          <Hero />
     
          
         
       
        </Section>
        <Divider/>
       
       
     
      
       
      </div>
  

   
  
      <Section>
        <Download data={[]} />
      </Section>
      <Divider />



      <SectionAlternate>
        <Dialoguebox/>
      </SectionAlternate>
    </div>
  );
};

export default DesktopApp;
