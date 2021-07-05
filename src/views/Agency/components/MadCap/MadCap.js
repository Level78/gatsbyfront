import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  textWhite: {
    color: 'white',
    textTransform: 'uppercase',
  },
}));

const MadCap = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={<span className={classes.textWhite}>Chromium Controller</span>}
        titleVariant="h1"
        subtitle={<span className={classes.textWhite}>Single cell resolution to maximize biological insight </span>}
        ctaGroup={[
          <Button href='/e-commerce/' variant="outlined" color="secondary" size="large">

            Explore all 10X Genomics
         
          </Button>,
        ]}
        disableGutter
        data-aos="fade-up"
      />
    </div>
  );
};

MadCap.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default MadCap;
