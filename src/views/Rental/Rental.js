import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import Hulla from './components/Hulla'


import {
  Advantages,
  Articles,
  AskExpert,
  FeaturedProperties,
  FooterHero,
  Hero,

 
  Reviews,
  Search,
  SellProperty,
  Teaser,
  HouseTypes,


} from './components';

import {
  
  aricles,
  featuredProperties,
 
  reviews,

  advantages,
  hulbul,

} from './data';


const useStyles = makeStyles(theme => ({
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
}));

const Rental = () => {
  const classes = useStyles();

  return (
    <div>
      <Hero />
      <SectionAlternate>
        <Search />
      </SectionAlternate>
      <Section>
        <Teaser />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <Articles data={aricles} />
      </Section>
      <SectionAlternate>
        <FeaturedProperties data={featuredProperties} />
      </SectionAlternate>
      
      <SectionAlternate innerNarrowed>
        <HouseTypes />
      </SectionAlternate>
      <Section>
        <Reviews data={reviews} />
     
      </Section>
      <SellProperty />
      <Section>
        <Hulla data={hulbul} />
        
      </Section>
      <SectionAlternate>
        <Advantages data={advantages} />
      </SectionAlternate>
      <Section>
        <AskExpert />
      </Section>
      <FooterHero />
    </div>
  );
};

export default Rental;
