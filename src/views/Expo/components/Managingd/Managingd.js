import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { LinkedIn } from '@material-ui/icons';
import {
  useMediaQuery,

  Grid,
  List,
  ListItem,
  IconButton,

 
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

const Managingd = props => {
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
                    <Typography color="secondary" variant="inherit" component="span">Praveen Gupta</Typography>{' '}
                      <br/> Managing Director & Founder
                  </span>
                }
                subtitle="Praveen has over 23 years of marketing experience in life science and molecular diagnostic arena handling solutions for cell biology, proteomics, high-throughput screening and genomics. Praveen holds a Master’s degree in Genetics from Pune University coupled with a management degree from XLRI, Jamshedpur. His stints at Ranbaxy, Dr Reddys lab, Life Technologies Inc, Biorad and DSS has given him a fairly good insight of the Complex yet promising Indian biotech space."
                align="left"
                disableGutter
              />
              <List disablePadding>
                <ListItem disableGutters data-aos="fade-up">
                <IconButton className={classes.socialIcon}>
                  <FacebookIcon className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <LinkedIn className={classes.icon} />
                </IconButton>
                <IconButton className={classes.socialIcon}>
                  <TwitterIcon className={classes.icon} />
                </IconButton>
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
                src="https://ik.imagekit.io/j6phbjneuop/premasweb/imageonline-co-roundcorner__6__JKxhNUl6I.png"
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

Managingd.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.object.isRequired,
};

export default Managingd;
