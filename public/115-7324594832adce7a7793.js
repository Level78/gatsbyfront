(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{UCcN:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var n=a("q1tI"),o=a.n(n),s=a("hlFM"),c=a("VPqE"),r=a("Jc4N"),i=[{name:"items",type:"object[]",default:"",description:"The array of images object which should consist of src, alt and srcset attributes"},{name:"className",type:"string",default:"",description:"External classes"},{name:"imageClassName",type:"string",default:"",description:"External classes for the images"},{name:"navigationButtonStyle",type:"string",default:"",description:"Styles classes of the navigation button"}],p=function(e){var t=Object.assign({},e);return o.a.createElement("div",t,o.a.createElement(c.e,{title:"Description",gutterBottom:!0},o.a.createElement(c.b,{title:"SwiperImage",path:"src/components/molecules/SwiperImage/SwiperImage.js",description:"Component to display the image swiper"})),o.a.createElement(c.e,{title:"Import",gutterBottom:!0},o.a.createElement(c.a,{code:"\nimport { SwiperImage } from 'components/molecules';\n// or\nimport SwiperImage from 'components/molecules/SwiperImage';\n"})),o.a.createElement(c.e,{title:"Props & Methods",gutterBottom:!0},o.a.createElement(c.d,{dataProperties:i})),o.a.createElement(c.e,{title:"Example",gutterBottom:!0},o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{marginBottom:2,display:"flex",justifyContent:"space-evenly",alignItems:"center",padding:2,border:"1px solid #ccc",borderRadius:"4px"},o.a.createElement(r.f,{style:{width:700,height:500},items:[{src:"https://assets.maccarianagency.com/the-front/photos/coworking/place2.jpg",srcset:"https://assets.maccarianagency.com/the-front/photos/coworking/place2.jpg 2x",alt:"..."},{src:"https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg",srcset:"https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg 2x",alt:"..."}]})),o.a.createElement(c.a,{code:"\nimport React from 'react';\nimport { Box } from '@material-ui/core';\nimport { SwiperImage } from 'components/molecules';\nimport 'swiper/css/swiper.min.css';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} display=\"flex\" justifyContent=\"space-evenly\" alignItems=\"center\" padding={2} border=\"1px solid #ccc\" borderRadius=\"4px\">\n      <SwiperImage\n        style={{\n            width: 500,\n            height: 300,\n        }}\n        items={[{\n            src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place2.jpg',\n            srcset: 'https://assets.maccarianagency.com/the-front/photos/coworking/place2.jpg 2x',\n            alt: '...'\n        }, {\n            src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg',\n            srcset: 'https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg 2x',\n            alt: '...'\n        }]}\n      />\n    </Box>\n  );\n}\n"}))))}}}]);
//# sourceMappingURL=115-7324594832adce7a7793.js.map