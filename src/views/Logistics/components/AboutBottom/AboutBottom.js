import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 'bold',
  },
  image: {
    maxWidth: 400,
  },
}));

const AboutBottom = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid
          item
          container
          justify={isMd ? 'flex-start' : 'center'}
          xs={12}
          md={6}
        >
          <Image
            src="https://ik.imagekit.io/j6phbjneuop/premasweb/aboutuscreated_p0_QUDnOg.png"
            srcSet="https://ik.imagekit.io/j6phbjneuop/premasweb/aboutuscreated_p0_QUDnOg.png"
            className={classes.image}
          />
        </Grid>
        <Grid item container alignItems="center" xs={12} md={6}>
          <SectionHeader
            title="WHO WE ARE"
            subtitle="Premas Life sciences endeavors to bring to researchers and innovation-focused organisations cutting edge tools for applications across human health, agriculture, pharma, environment, forensics, energy and much more. With the advent of the era of genomics & proteomics, leveraging the latest technology to gain an edge in mining and interpreting information has become imperative. With our ensemble range of products, we facilitate to answer the vital questions of people's research using some of the smartest tools from across the world. "
            subtitleVariant="body1"
            subtitleColor="textPrimary"
            data-aos="fade-up"
            align="left"
          />
        </Grid>
      </Grid>
    </div>
  );
};

AboutBottom.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default AboutBottom;
