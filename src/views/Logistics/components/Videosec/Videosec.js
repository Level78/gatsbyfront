import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid,  } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { LearnMoreLink } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  videoIframe: {
    boxShadow: `0 5px 15px 0 ${theme.palette.cardShadow}`,
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      boxShadow: 'none',
    },
  },
}));

const Videosec = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container justify="space-between" spacing={isMd ? 8 : 2}>
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <SectionHeader
            title="The Future is Genomics"
            subtitle="Watch Praveen Gupta (MD) Premas LifeSciences at Illuminia Tribe Global Channel Partner Summit"
            ctaGroup={[
              <LearnMoreLink
                title="Visit the link"
                href="#"
                variant="h6"
              />,
            ]}
            align={isMd ? 'left' : 'center'}
            disableGutter
            titleVariant="h3"
          />
        </Grid>
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <iframe
            className={classes.videoIframe}
            title="video"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/ClIbn_IF31U"
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          />
        </Grid>
      </Grid>
    </div>
  );
};

Videosec.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Videosec;
