import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Xgenone from './components/Xgenone'
import { Section, SectionAlternate } from 'components/organisms';
import {
  
  Hero,
 
  Newsletter,
  Overview,
 
} from './components';

import {

} from './data';

const useStyles = makeStyles(theme => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  sectionFeaturedProducts: {
    background: theme.palette.secondary.main,
  },
  reviewSection: {
    background: theme.palette.primary.dark,
  },
}));

const Ecommerce = () => {
  const classes = useStyles();

  return (
    <div>
      <Section className={classes.pagePaddingTop}>
        <Hero />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <Overview />
      </Section>
      <SectionAlternate>
        <Xgenone/>
      </SectionAlternate>
      
 
     
     
   
      <Section>
        <Newsletter />
      </Section>
    </div>
  );
};

export default Ecommerce;
