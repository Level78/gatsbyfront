import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { useMediaQuery, Grid } from '@material-ui/core';
import { LearnMoreLink, Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';

const useStyles = makeStyles(() => ({
  logo: {
    maxWidth: 70,
  },
}));

const Brands = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12} md={6}>
           
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up">
             
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={isMd ? 4 : 2}
            direction={isMd ? 'row' : 'column-reverse'}
          >
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Grid container spacing={2}>
                {data.map((item, index) => (
                  <Grid item xs={4} key={index}>
                    <CardBase withShadow liftUp>
                      <Image
                        src={item.logo}
                        alt={item.name}
                        className={classes.logo}
                        lazy={false}
                      />
                    </CardBase>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <SectionHeader
                title="Our Featured Partners"
                subtitle="Our Technology Partners provide best-in-class enterprise solutions that are secure, performant, and easy to use. Each integration is developed and maintained based on expert guidance from the Premas VIP team"
                align="left"
                label="BRANDS WE ARE INVOLVED WITH"
                ctaGroup={[
                  <LearnMoreLink
                    title="Explore products from brands"
                    href="#"
                    variant="h6"
                  />,
                ]}
                disableGutter
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Brands.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Brands;
