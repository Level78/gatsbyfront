import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const Process = props => {
  const { className, ...rest } = props;

  return (
    <div className={clsx('jarallax', className)} {...rest}>
      <SectionHeader
        title="we witness customers advocating us"
        titleVariant="h2"
        subtitle="Our products are unique and stand apart in the market on account of their uncompromised quality, high-level automation and throughput, globally reviewed and published in leading research journals."
        ctaGroup={[
          <Button variant="contained" color="primary" size="large">
            Contact us
          </Button>,
        ]}
        disableGutter
        data-aos="fade-up"
      />
    </div>
  );
};

Process.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Process;
