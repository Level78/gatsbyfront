import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
import { HeroBackground } from 'components/organisms';

const useStyles = makeStyles(() => ({
  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <HeroBackground backgroundImg="https://ik.imagekit.io/j6phbjneuop/ezgif.com-gif-maker__4__AuxEPdlsC.gif">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              className={clsx(classes.textWhite, classes.title)}
            >
              Join the world's leading companies at TheFront 2020
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.textWhite} gutterBottom>
            Premas Life Sciences (PLS) is a young, dynamic, and focused organization introducing game-changing niche technologies in the
             field of Genomics, Cell Biology, and Biopharma to boost innovative research and diagnostics in India. We are also the knowledge
              partners to several reputed research institutes and hospitals, enabling them to set up core genomics facilities with complete support
               at all fronts. 
            </Typography>
            <Typography variant="h6" className={classes.textWhite}>
            The biggest motivation behind the inception of PLS was to set up an organization that could 
            contribute significantly to the life science research landscape in India, 
            and have the convergence of a committed and highly skilled workforce to catalyze this process.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button size={isMd ? 'large' : 'medium'} variant="contained">
              Download exhibitor overview
            </Button>
          </Grid>
        </Grid>
      </HeroBackground>
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
