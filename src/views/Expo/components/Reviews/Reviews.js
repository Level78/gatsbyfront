import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid,  Typography, colors } from '@material-ui/core';


import { SectionHeader, IconAlternate } from 'components/molecules';
import { CardReview } from 'components/organisms';

const useStyles = makeStyles(() => ({
  sectionHeadlineStars: {
    maxWidth: 200,
  },
}));

const Reviews = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        overline={
          <IconAlternate
          color={colors.indigo}
                  fontIconClass="fas fa-users"
            
            className={classes.sectionHeadlineStars}
            width="auto"
          />
        }
        title={
          <span>
            What our
            <Typography color="secondary" variant="inherit" component="span"> Employees</Typography> Say
          </span>
        }
        subtitle="Teamwork has always been an essential capability for successful enterprises, but with today’s organisations undergoing disruption and digitisation in an ‘innovate or die’ economy, it is now more important than ever that employees can collaborate effectively across geographical sites, between business functions and within increasingly fluid job hierarchies. "
        fadeUp
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((review, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            md={4}
            data-aos="fade-up"
          >
            <CardReview
              variant="outlined"
              text={review.feedback}
              icon={
                <IconAlternate
                  color={colors.indigo}
                  fontIconClass="fas fa-user-check"
                />
              }
              authorName={review.authorName}
              authorTitle={review.authorOccupation}
              authorPhoto={review.authorPhoto}
            />
          </Grid>
        ))}
       
      </Grid>
    </div>
  );
};

Reviews.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Reviews;
