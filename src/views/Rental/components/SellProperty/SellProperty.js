import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles((theme) => ({
  grid: {
    maxWidth: '100%',
    background: theme.palette.primary.dark,
  },
  textWhite: {
    color: 'white',
  },
}));

const SellProperty = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <Grid container className={classes.grid}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Image src="https://ik.imagekit.io/j6phbjneuop/PREMAS_OPTMIZED_CONTENT/Office___people/Optimized-LRM_EXPORT_16960852736595_20190716_173122977_DNdrW3wco.jpeg" lazy={false} />
        </Grid>
        <Grid item container alignItems="center" xs={12} md={6}>
          <Section>
            <SectionHeader
              title={
                <span className={classes.textWhite}>
                  WHO WE ARE
                </span>
              }
              titleVariant="h3"
              subtitle={
                <span className={classes.textWhite}>
         Premas Life sciences endeavors to bring to researchers and innovation-focused organisations cutting edge tools for applications across human health, agriculture, pharma, environment, forensics, energy and much more. With the advent of the era of genomics & proteomics, leveraging the latest technology to gain an edge in mining and interpreting information has become imperative. With our ensemble range of products, we facilitate to answer the vital questions of people's research using some of the smartest tools from across the world. Our dynamic portfolio of leading global technologies boasts of some of the most exciting genomics, genetics and cell biology applications, manufactured by global giants like Illumina, Fluidigm, 10X genomics etc.. has tremendously boosted the popularity of the company. Over the years, PLS’s dedicated and persistent client-centric approach has transformed this enterprise from a young start-up to an established leader with a CAGR of 60% in a very short span of time.
                </span>
              }
              ctaGroup={[
                <Button variant="contained" size="large">
                  Get started
                </Button>,
              ]}
              align="left"
              disableGutter
              data-aos="fade-up"
            />
          </Section>
        </Grid>
      </Grid>
    </div>
  );
};

SellProperty.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default SellProperty;
