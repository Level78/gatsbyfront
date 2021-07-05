import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import Ceo from './components/Ceo'
import Managingd from './components/Managingd'
import Vpsupport from './components/Vpsupport'
import Gpm from './components/Gpm'
import PromoSwiper from './components/PromoSwiper'

import {
  
  Advantages,
  Contact,
  Description,
  Gallery,
  Hero,
  PromoNumbers,
  Reviews


  
} from './components';

import {
  promoNumbers,
  advantages,
  reviews,

 

  gallery,
  promo,
 
} from './data';

const useStyles = makeStyles(theme => ({
  sectionDescription: {
    background: colors.blue[900],
  },
  sectionAlternateForm: {
    background: 'transparent',
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 300px, ${theme.palette.primary.dark} 0%)`,
  },
}));

const Expo = () => {
  const classes = useStyles();

  return (
    <div>
      <Hero />
      <SectionAlternate className={classes.sectionDescription}>
        <Description />
      </SectionAlternate>
      <Section>
        <PromoNumbers data={promoNumbers} />
      </Section>
      <Divider />

      <Section>
      <Ceo/>
      </Section>
      <SectionAlternate>
        <Managingd/>
      </SectionAlternate>
      <Section>
        <Vpsupport/>
      </Section>
      <SectionAlternate>
        < Gpm/>
      </SectionAlternate>

      
      <Section>
        <Advantages data={advantages} />
      </Section>
    
      
      <Divider />
      <SectionAlternate>
        <PromoSwiper data ={promo}/>
      </SectionAlternate>
      socail media feeds
      <Gallery data={gallery} />
      <Section>
      
        <Reviews data={reviews} />
      
      </Section>
      <div className={classes.sectionAlternateForm}>
        <Section narrow>
          <Contact />
        </Section>
      </div>
    </div>
  );
};

export default Expo;
