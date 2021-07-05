import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(() => ({
  textWhite: {
    color: 'white',
    textTransform: 'uppercase',
  },
}));

const Nike = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={<span className={classes.textWhite}>COVARIS ME 220</span>}
        titleVariant="h1"
        subtitle={<span className={classes.textWhite}>The ME220 Focused-ultrasonicator is the multi-sample, multi-application benchtop sample preparation solution for every lab</span>}
        ctaGroup={[
          <Button variant="outlined" color="secondary" size="large">
            Explore all covaris products
          </Button>,
        ]}
        disableGutter
        data-aos="fade-up"
      />
    </div>
  );
};

Nike.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Nike;
