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

const Hulla = props => {
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
                title="We love to explore new ways to engage with brands and reach"
                subtitle="Our mission is to help you to grow your design skills, meet and connect with professional dsigners who share your passions."
                align="left"
                label="BRANDS WE ARE INVOLVED"
                ctaGroup={[
                  <LearnMoreLink
                    title="See all integrations"
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

Hulla.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Hulla;
