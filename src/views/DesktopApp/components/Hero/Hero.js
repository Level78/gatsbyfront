import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import Switch from '@material-ui/core/Switch';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Box } from '@material-ui/core';
import { Accordion } from 'components/organisms';



const items = [{
  id: 'faq-1',
  title: 'Patented Whirl stirring Mixing Technology',
  subtitle: '',
  text: 'Focused movement: Less aerosol/ Low Cross-contamination/ Low carryover contamination Better bead/ sample Homogenization Mimics vortexer: Better LysisComplete tissue lysis on the machine.',

}, {
  id: 'faq-2',
  title: 'Scalability ',
  subtitle: '',
  text: '48 samples in less than 30 minutes50 -1600 ul processing capacity Pool testing compatible',

}, {
  id: 'faq-3',
  title: 'Ease of Operation.',
  subtitle: '',
  text: 'Pre-filled reagent cartridge (Just Add 300 ul VTM and 10 ul PK Automatic tip Loading/Discard',

},
{
  id: 'faq-2',
  title: 'Better Purity',
  subtitle: '',
  text: '3 washing steps ensure better purity/ Removal of pigments, phenolics, carbohydrates.Compatible with downstream applications such as qPCR',

},
]


const useStyles = makeStyles(theme => ({
  image: {
    boxShadow:
      '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };


  return (
    <div className={className} {...rest}>

      <Grid
        container
        justify="space-between"
        spacing={4}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <SectionHeader
            title={
              <span>
               Enable Labortory Productivity with
                <br />
                <Typography component="span" variant="inherit" color="primary">
            Maelstrom 4800
                </Typography>
              </span>
            }
            subtitle="Maelstrom 4800 is a standalone and compact automated nucleic acid extractor designed for medium-throughput applications. Specialized spin tips enable efficient mixing of magnetic beads. With an intuitive UI and customizable programs, Maelstrom 4800 enables laboratory productivity by transforming routine operations into a walk-away solution. "
            ctaGroup={[
              <Button variant="outlined" color="primary" size="large">
                EXPLORE QUICKBOOK
              </Button>,
             <FormControlLabel
             control={<Switch checked={checked} onChange={handleChange} />}
             label=""
           />
              
              
            ]}
            align="left"
            disableGutter
            titleVariant="h3"
          />
          
          <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        <Box marginBottom={0} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="0px solid #ccc" borderRadius="4px">
            <Accordion items={items} />
          </Box>
        </Slide>
        
        </Grid>
        
       
        

        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="https://ik.imagekit.io/j6phbjneuop/output-onlinepngtools__7__Q7cQXZ8b3.png"
            alt="TheFront Company"
            className={classes.image}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </Grid>
   
      </Grid>
     
      
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
