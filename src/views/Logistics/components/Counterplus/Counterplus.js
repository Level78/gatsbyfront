import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';
// import { Image } from 'components/atoms';
import { SectionHeader, CountUpNumber } from 'components/molecules';
import { Icon } from 'components/atoms';
import { colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  placementGrid: {
    maxWidth: 320,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  coverImage: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 200,
    },
  },
}));

const Counterplus = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <SectionHeader
                title={
                  <span>
                    Stay focused on your business.
                    <br />
                    <Typography component="span" variant="inherit" color="primary">
                      Let us handle the design.
                    </Typography>
                  </span>
                  
                }
                />
            
           
           
                <SectionHeader
                
                subtitle="You have a business to run. Stop worring about cross-browser bugs, designing new pages, keeping your components up to date. Let us do that for you."
                align="center"
                fadeUp
                disableGutter
                
                />
          
              
            </Grid>
          
            <Grid    align="center" item xs={12}>
          
         
              <div    align="center" className={classes.placementGrid}>
                  
                <div>
                <Icon
                  color={colors.blue}
                  fontIconClass="fas fa-cogs"
                />
                  <CountUpNumber
                    end={200}
                    label="INSTALLATIONS"
                    textColor="primary"
                    suffix="+"
                  />
                </div>
                <div>
                <Icon
                  color={colors.blue}
                  fontIconClass="fas fa-search-plus"
                />
                
                  <CountUpNumber
                    end={260}
                    label="RESEARCH"
                    textColor="primary"
                    suffix="+"
                  />
                </div>
               
             
                
              </div>
            </Grid>
            <Grid    align="center" item xs={12}>
              <div    align="center"className={classes.placementGrid}>
                <div>
                <Icon
                  color={colors.blue}
                  fontIconClass="fas fa-users"
                />
                  <CountUpNumber
                    end={ 60}
                    label="EMPLOYEES"
                    textColor="primary"
                    suffix="+"
                  />
                </div>
                <div>
                <Icon
                  color={colors.blue}
                  fontIconClass="fas fa-copyright"
                />
                  <CountUpNumber
                    end={ 15}
                    label="BRANDS"
                    textColor="primary"
                    suffix="+"
                  />
                </div>
   
                
              </div>
                           
          
            </Grid>
          </Grid>
       
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
             
         
        </Grid>
   
      </Grid>
     
    </div>
  );
};

Counterplus.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Counterplus;
