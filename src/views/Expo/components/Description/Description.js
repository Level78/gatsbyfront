import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
}));

const Description = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            className={clsx(classes.textWhite, classes.title)}
          >
            Vision:  rising genomics engineering
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="p" className={classes.textWhite}>
          The foundation of Premas was laid down when ‘start-up culture’ was not a buzz word. Two major 
          obstacles that we faced were attracting talent as well as customers because for both the groups we 
          were a new, unknown, and untested brand. Our vision for the future, our passion coupled with the 
          technical prowess 
          helped us establish faith in our customers ultimately conquering these hurdles down the line.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

Description.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Description;
