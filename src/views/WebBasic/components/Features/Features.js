import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, CountUpNumber } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  placementGrid: {
    maxWidth: 320,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  coverImage: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
}));

const Features = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SectionHeader
                title={
                  <span>
                    Stay focused on your business.
                    <br />
                    <Typography component="span" variant="inherit" color="primary">
                      Let us handle the design.
                    </Typography>
                  </span>
                }
                subtitle="You have a business to run. Stop worring about cross-browser bugs, designing new pages, keeping your components up to date. Let us do that for you."
                align="left"
                fadeUp
                disableGutter
              />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.placementGrid}>
                <div>
                  <CountUpNumber
                    end={200}
                    label="INSTALLATIONS"
                    textColor="primary"
                    suffix="+"
                  />
                </div>
                <div>
                  <CountUpNumber
                    end={260}
                    label="RESEARCH"
                    textColor="primary"
                    suffix="+"
                  />
                </div>
               
             
                
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.placementGrid}>
                <div>
                  <CountUpNumber
                    end={ 60}
                    label="EMPLOYEES"
                    textColor="primary"
                    suffix="+"
                  />
                </div>
                <div>
                  <CountUpNumber
                    end={ 15}
                    label="BRANDS"
                    textColor="primary"
                    suffix="+"
                  />
                </div>
                
              
                
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos="fade-up"
        >
          <Image
            src="https://assets.maccarianagency.com/the-front/illustrations/dashboard-extended.svg"
            alt="..."
            className={classes.coverImage}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Features;
