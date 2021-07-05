import React from 'react'
import styled from 'styled-components'
// import { Button } from '@material-ui/core'
import Video from 'assets/videos/dar.mp4'
// import Hero from 'views/Logistics/components/Hero'



const Videohero = () => {
    return (
        <HeroContainer>
         <TestCont>
             
            <h1> FUTURE IS GENOMICS</h1> 
                 </TestCont>   
               <Testpar> <p> “If you think being descended from apes is bad for your self esteem, then <span>get used to the idea that you are also descended from viruses.</span>”
― Matt Ridley</p>
</Testpar> 
 
               {/* <Testicon>  <Image src ="https://ik.imagekit.io/j6phbjneuop/New_Folder/icons8-chevron-down-50_3iqiL28_bb.png" />
                
               </Testicon> */}
            <Herobg>

                <VideoBg src={Video} type = "video/mp4" autoPlay loop muted playsInline />
            </Herobg>
            <HeroContent>

               {/* <Hero/> */}
            </HeroContent>
            
        </HeroContainer>
    )
}

export default Videohero

const HeroContainer = styled.div`
background:#0c0c0c;
display:flex;
justify-content:center;
align-items:center;
padding:0 1rem;
height:100vh;
color:#ffff;
position: relative;
margin-top:-80px



`
const Herobg = styled.div`

`
const VideoBg = styled.video``
const HeroContent = styled.div`
z-index:10;

`
// const HeroH1 = styled.div``
// const HeroItems = styled.div`
// display:flex;
// flex:direction:column;
// justify-content:center;


// `
// const HeroP = styled.div``
const TestCont = styled.h1`
position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
 
  font-size: 4 em;
  text-align: center;
  color: #FFFF;
  
`;

const Testpar = styled.h3`
position: absolute;
top:60%;
text-align: center;

  
`;



