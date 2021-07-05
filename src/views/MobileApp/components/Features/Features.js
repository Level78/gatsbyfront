import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,

  Grid,
  List,
  ListItem,

 
  Typography,
 
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader,} from 'components/molecules';

const useStyles = makeStyles(theme => ({
  listItemAvatar: {
    marginRight: theme.spacing(2),
  },
  coverImage: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400,
    },
  },
  avatar: {
    width: 60,
    height: 60,
    marginLeft: theme.spacing(-2),
    border: `4px solid ${theme.palette.background.paper}`,
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    '&:first-child': {
      marginLeft: 0,
    },
  },
}));

const Features = props => {
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
          <Grid
            container
            spacing={isMd ? 4 : 2}
            direction={isMd ? 'row' : 'column-reverse'}
          >
            <Grid item xs={12} md={6} data-aos="fade-up">
              <SectionHeader
                label="PREMAS LEADERSHIP"
                title={
                  <span>
                    <Typography color="secondary" variant="inherit" component="span">AVIJIT SINGH</Typography>{' '}
                      <br/> Founder Chairman & CEO
                  </span>
                }
                subtitle="Avijit was the Group Director, Eastern Hemisphere Operations for Gillette-Duracell and a management consultant with AT Kearney before becoming an entrepreneur. He is associated with several enterprises across the globe and has significant management experience of more than 30 years now."
                align="left"
                disableGutter
              />
              <List disablePadding>
                <ListItem disableGutters data-aos="fade-up">
                  <Typography variant="body1">
                  
                  </Typography>
                </ListItem>
               
                <ListItem disableGutters data-aos="fade-up">
                  <Typography variant="body1">
                   
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              xs={12}
              md={6}
              data-aos="fade-up"
            >
              <Image
                src="https://ik.imagekit.io/j6phbjneuop/premasweb/premas_ceo_2_HRTFrMnum_gydH9CnYu.png"
                alt="..."
                className={classes.coverImage}
                lazy={false}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.object.isRequired,
};

export default Features;
