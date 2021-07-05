import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const Welcome = props => {
  const { className, ...rest } = props;

  return (
    <div className={clsx('jarallax', className)} {...rest}>
      <SectionHeader
        title="Our products are unique and stand apart in the market."
        titleVariant="h2"
        subtitle="Our portfolio boasts of diverse cutting-edge tools serving multiple research and diagnostic applications in the field of Genomics, Cell Biology, and Biopharma."
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

Welcome.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Welcome;
