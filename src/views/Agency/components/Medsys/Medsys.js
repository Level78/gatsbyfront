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

const Medsys = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={<span className={classes.textWhite}>Digital PCR reimagined</span>}
        titleVariant="h1"
        subtitle={<span className={classes.textWhite}>  High resolution, high multiplex, powerful </span>}
        ctaGroup={[
          <Button variant="outlined" color="secondary" size="large">
            Explore Jn Medsys
          </Button>,
        ]}
        disableGutter
        data-aos="fade-up"
      />
    </div>
  );
};

Medsys.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Medsys;
