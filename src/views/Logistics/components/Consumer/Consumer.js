import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar, Typography } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { HeroSimpleBackground } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  avatar: {
    width: 60,
    height: 60,
    border: `${theme.spacing(1)}px solid ${theme.palette.background.paper}`,
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    marginTop: theme.spacing(1 / 2),
    [theme.breakpoints.up('sm')]: {
      width: 80,
      height: 80,
    },
  },
  grid: {
    maxWidth: 600,
    margin: '0 auto',
  },
}));

const Consumer = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={
          <span>
            We Love Our {' '}
            <Typography color="secondary" variant="inherit" component="span">Customers</Typography>
          </span>
        }
        subtitle="We have been serving some of the most reputable organization in the country"
       
        label="build up a community"
        data-aos="fade-up"
      />
      <HeroSimpleBackground
        backgroundImage="https://ik.imagekit.io/j6phbjneuop/output-onlinepngtools_1MI0aCQ4fb.png"
        backgroundSize="contain"
      >
        <Grid container spacing={3} className={classes.grid} data-aos="fade-up">
          {data.map((item, index) => (
            <Grid
              item
              container
              key={index}
              xs={4}
              direction={index < 3 ? 'row' : 'row-reverse'}
            >
              <Grid item xs={9}>
                <Avatar
                  {...item.authorPhoto}
                  className={classes.avatar}
                  data-aos="zoom-in"
                  data-aos-once="false"
                />
              </Grid>
              <Grid item xs={6}></Grid>
            </Grid>
          ))}
        </Grid>
      </HeroSimpleBackground>
    </div>
  );
};

Consumer.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Consumer;
