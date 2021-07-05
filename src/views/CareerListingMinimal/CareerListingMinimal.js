import React from 'react';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { About, Features, Hero,  Newsletter } from './components';

import { CardJobCompany } from 'components/organisms';
import { CardBase } from 'components/organisms';

import Button from '@material-ui/core/Button'




import { features,   } from './data';
import Dialoguetsm from 'components/organisms/Dialoguetsm';

const CareerListingMinimal = () => (
  <div>
    <Hero />
    <Section>
      <About />
    </Section>
    <Features data={features} />

    
  
    
   
        


    
    <SectionAlternate>
    
      
      <CardBase withShadow liftUp>
      <CardJobCompany
            jobTitle="Fulltime"
            jobLocation="Chennai, India"
            companyName="Territory sales manager"
            companyLogo="https://ik.imagekit.io/j6phbjneuop/icons8-sales-performance-50_sucGHGqT6x.png"
            jobsCount="2 jobs"
            companyInfo="Sync your team's work and activity to share automatically in a channel with a simple plugin."
          />
     <Button variant="outlined" color="primary" size="large" fullWidth={true}><Dialoguetsm/></Button>
        
      </CardBase>

      <br/>
      
      <br/>





      <CardBase withShadow liftUp variant="outlined">
      <CardJobCompany
            jobTitle="Fulltime"
            jobLocation="Chennai , India"
            companyName="Filed Service engineer"
            companyLogo="https://ik.imagekit.io/j6phbjneuop/icons8-field-50_pw1pd9hcZ.png"
            jobsCount="2 jobs"
            companyInfo="Sync your team's work and activity to share automatically in a channel with a simple plugin."
          />
         <Button variant="outlined" color="primary" size="large" fullWidth={true}><Dialoguetsm/></Button>
        
      </CardBase>


      <br/>
      
      <br/>

      <CardBase withShadow liftUp variant="outlined">
      <CardJobCompany
            jobTitle="Fulltime"
            jobLocation="Ahemdabad , India"
            companyName="Field Application Scientist"
            companyLogo="https://ik.imagekit.io/j6phbjneuop/icons8-scientist-man-50_hb7z_uSx8.png"
            jobsCount="2 jobs"
            companyInfo="Sync your team's work and activity to share automatically in a channel with a simple plugin."
          />
   <Button variant="outlined" color="primary" size="large" fullWidth={true}><Dialoguetsm/></Button>
        
      </CardBase>

      <br/>
      <br/>
      <CardBase withShadow liftUp variant="outlined">
      <CardJobCompany
            jobTitle="Fulltime"
            jobLocation="Delhi, India"
            companyName="Customer support executive"
            companyLogo="https://ik.imagekit.io/j6phbjneuop/icons8-customer-support-50_dl93K0oJ1.png"
            jobsCount="2 jobs"
            companyInfo="Sync your team's work and activity to share automatically in a channel with a simple plugin."
          />
        <Button variant="outlined" color="primary" size="large" fullWidth={true}><Dialoguetsm/></Button>
        
      </CardBase>
    


    

    </SectionAlternate>
    <Section>
      <Newsletter />
    </Section>
    <Divider />
  </div>
);

export default CareerListingMinimal;
