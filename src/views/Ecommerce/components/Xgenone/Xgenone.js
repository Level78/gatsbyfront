import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Box } from '@material-ui/core';
import { Accordion } from 'components/organisms';
import Switch from '@material-ui/core/Switch';
import Slide from '@material-ui/core/Slide';



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
  price: {
    color: theme.palette.text.primary,
    fontSize: 32,
    fontWeight: 'normal',
    [theme.breakpoints.up('md')]: {
      fontSize: 48,
    },
  },
  disclimer: {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1 / 2, 1),
    background: theme.palette.alternate.main,
    display: 'inline-block',
  },
  image: {
    maxWidth: 600,
  },
}));

const Xgenone = props => {
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
        spacing={isMd ? 4 : 2}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <SectionHeader
            title="Automate your single cell workflows"
            subtitle={<span className={classes.price}>Chromium Connect</span>}
            ctaGroup={[
              <Button variant="disabled" color="primary" size="large">
                Explore Quickbook
              </Button>,
                <FormControlLabel
                control={<Switch checked={checked} onChange={handleChange} />}
                label=""
              />
            ]}
            align="left"
            data-aos="fade-up"
            titleVariant="h3"
          />
          <div className={classes.disclimer} data-aos="fade-up">
         
            <Typography variant="subtitle1" color="textSecondary">
            we are continuously adding products to platform ..stay tuned*
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          container
          justify="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="https://ik.imagekit.io/j6phbjneuop/Chromium_Connect-trimmed_ou6cWHFOk.png"
            srcSet="https://ik.imagekit.io/j6phbjneuop/Chromium_Connect-trimmed_ou6cWHFOk.png"
            alt="maelstrom"
            className={classes.image}
          />
        </Grid>
      </Grid>
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        <Box marginBottom={0} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="0px solid #ccc" borderRadius="4px">
            <Accordion items={items} />
          </Box>
        </Slide>
    </div>
  );
};

Xgenone.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Xgenone;
