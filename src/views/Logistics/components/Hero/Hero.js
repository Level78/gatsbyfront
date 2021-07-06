import React from 'react';
import PropTypes from 'prop-types';
// import clsx from 'clsx';
import { makeStyles , } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { SectionHeader, TypedText } from 'components/molecules';
import { HeroShaped } from 'components/organisms';
// import styled from 'styled-components';




















const useStyles = makeStyles(theme => ({
  fontWeight900: {
    fontWeight: 900,
  },
  leftSideContent: {
    
     
      backgroundSize: '800px auto',
      
      
      
    '& .section-header__cta-container': {
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        '& .section-header__cta-item-wrapper': {
          width: '100%',
          '&:last-child': {
            marginLeft: 0,
            marginTop: theme.spacing(1),
          },
          '& .MuiButtonBase-root': {
            width: '100%',
          },
        },
      },
      
    }
    
  },
  
  heroShaped: {
    '& .hero-shaped__image': {
      backgroundColor: theme.palette.alternate.main,
    },
    [theme.breakpoints.down('sm')]: {
      '& .hero-shaped__image': {
        position: 'relative',
      },
      '& .hero-shaped__wrapper': {
        flexDirection: 'column',
      },
    },
  },
  imageAnimation: {
    background: `url("https://ik.imagekit.io/j6phbjneuop/ezgif.com-gif-maker__10__0NZ7lNuXy.gif")`,
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'scroll',
    backgroundSize: '400px auto',
    animation: `$slideshow 50s linear infinite`,
    width: '600%',
    height: '600%',
    backgroundColor: theme.palette.alternate.dark,
    top: '-25%',
    left: '-100%',
    position: 'absolute',
    [theme.breakpoints.up('sm')]: {
      backgroundSize: '800px auto',
    }
  },
  imageAnimationDark: {
    background: `url("assets/images/leaflet-assets/some.gif")`,
  },
  '@keyframes slideshow': {
    '0%': {
      transform: 'rotate(-13deg) translateY(-25%)',
    },
    '100%': {
      transform: 'rotate(-13deg) translateY(-80%)',
    },
  },
}));

const Hero = ({ themeMode = 'light', className, ...rest }) => {
  const classes = useStyles();

  const title = (
    <Typography variant="h2" color= "primary" component="span" className={classes.fontWeight900}>

       Breakthrough Discoveries Need 
    
      <br />
      <TypedText
        component="span"
        variant="h2"
        color="primarylight"
        className={classes.fontWeight900}
        typedProps={{
          strings: [
            'vision',
            ' technology',
            'leadership',
            ' and Teamwork',
           
          ],
          typeSpeed: 50,
          loop: false,
        }}
      />
    </Typography>
  );

  const subtitle = 'Incepted in 2011 by a team of highly experienced and proficient professionals, Premas Life Sciences Pvt Ltd (PLS) is a young and focused Life Science company based out of Delhi, with a vision to be the technology & knowledge partners for Indian research & clinical diagnostics community.';

  const docsButton = (
    <Button size="large" variant="contained" color="" component="a" href="/documentation">
     OUR STORY
    </Button>
    
  );

  const buyButton = (
    <Button
      size="large"
      variant="contained"
      color=""
      component="a"
      href="/home"
    >
      Get started
    </Button>
  );

  const leftSideContent = (
    <SectionHeader
      title={title}
      subtitle={subtitle}
      align="left"
      titleProps={{
        variant: 'h2',
        color: 'textPrimary',
      }}
      ctaGroup={[docsButton, buyButton]}
      data-aos="fade-right"
      disableGutter
      className={classes.leftSideContent}
    />
  );
  return (
    <div className={className} {...rest}>
      <HeroShaped
        className={classes.heroShaped}
        leftSide={leftSideContent}
        
      />
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Theme mode
   */
  themeMode: PropTypes.string,
};

export default Hero;


// const Testcom = styled.h3`
// color:#ffff


// `