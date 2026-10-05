import service1 from '../Components/assets/services-1.png'
import service2 from '../Components/assets/services-2.png'
import service3 from '../Components/assets/services-3.png'
import service4 from '../Components/assets/services-4.png'
import service5 from '../Components/assets/services-5.png'
import service6 from '../Components/assets/services-6.png'
import type { menuListe } from '../types/type'
import portA from'../Components/assets/portfolio-1.png'
import portB from'../Components/assets/portfolio-2.png'
import portC from'../Components/assets/portfolio-3.png'
import portD from'../Components/assets/portfolio-4.png'
import portE from'../Components/assets/portfolio-5.png'
import portF from'../Components/assets/portfolio-6.png'
import portg from'../Components/assets/portfolio-7.png'
import porth from'../Components/assets/portfolio-8.png'
import portI from'../Components/assets/portfolio-9.png'
import teamA from'../Components/assets/team-2.jpg'
import teamB from'../Components/assets/team-3.jpg'
import teamC from'../Components/assets/team-4.jpg'
import teamD from'../Components/assets/team-5.jpg'
import aut from '../Components/assets/author1.jpg'
import founder from '../Components/assets/founder.jpg'


 



export const features = [
    {
        id:"1",
        imgA :service1,
        titre:"Optimisation",
        prgrphe:"Lorem ipsum dolor sit amet consectetur ",
        prgrphe1:"adipisicing elit. Ipsam, suscipit?",
    },
     {  
        id:"2",
        imgA :service2,
        titre:"Market Analysis",
        prgrphe:"Lorem ipsum dolor sit amet consectetur ",
        prgrphe1:"adipisicing elit. Ipsam, suscipit?",
    },
     {  
        id:"3",
        imgA :service3,
        titre:"Concept & Idea",
        prgrphe:"Lorem ipsum dolor sit amet consectetur ",
        prgrphe1:"adipisicing elit. Ipsam, suscipit?",
    },
     {  
        id:"4",
        imgA :service4,
        titre:"Development",
        prgrphe:"Lorem ipsum dolor sit amet consectetur ",
        prgrphe1:"adipisicing elit. Ipsam, suscipit?",
    },
     {  
        id:"5",
        imgA :service5,
        titre:"Integration",
        prgrphe:"Lorem ipsum dolor sit amet consectetur ",
        prgrphe1:"adipisicing elit. Ipsam, suscipit?",
    },
     {  
        id:"6",
        imgA :service6,
        titre:"Support",
        prgrphe:"Lorem ipsum dolor sit amet consectetur ",
        prgrphe1:"adipisicing elit. Ipsam, suscipit?",
    },
] 


export const navList:menuListe[]= [
    {
        lien:"/",
        nom:'Home'
    },
     {
        lien:"/about",
        nom:'About Us'
    },
     {
        lien:"/service",
        nom:'Services'
    },
     {
        lien:"/portfolio",
        nom:'Portfolio'
    },
     {
        lien:"/team",
        nom:'Team'
    },
     {
        lien:"/testimonial",
        nom:'Testimonial'
    },
     {
        lien:"/pricing",
        nom:'Pricing'
    },
     {
        lien:"/contact",
        nom:'Contact'
    },
] 

export const  creative = [
  {
      title:"About Creative Agency",
      pr1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptates porro. Unde nemo ipsum maxime libero architecto voluptates, voluptatem assumenda ullam natus consequuntur blanditiis quaerat deserunt perferendis rerum nobis non?",
      pr2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nemo debitis libero sed quidem ducimus ratione maiores, ex deleniti vitae reprehenderit perferendis magni tempore rerum cumque iusto! Omnis, nisi eaque!",
      pr3:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, facere numquam a itaque inventore saepe quo adipisci sed ipsam, quaerat, molestias vero! Ad esse, amet dolorum qui iure ex odio.",

    im:founder,
    nom2:"Richard Nautz",
    sstitre:"Founder & SEO",

  },
  

]


export const skill = [
    {
        nbre:'100',
        gras:"Market Analysis",
        prt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?"
    },
     {
        nbre:'90',
        gras:"Optimization",
        prt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?"
    },
     {
        nbre:'80',
        gras:"Integration",
        prt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?"
    },
     {
        nbre:'50',
        gras:"Development",
        prt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?"
    },
]


export const parcour = [
    {
        chiffres:"375",
        element:"Projects",
    },
     {
        chiffres:"247",
        element:"Clients",
    },
     {
        chiffres:"13",
        element:"Countries",
    },
     {
        chiffres:"18",
        element:"Team",
    },
] 

 export type teamOptions = {
    imgT:string;
    nom:string;
    profession:string;
}

export const equipe:teamOptions []=     [
    {
        imgT:teamA,
        nom :"Jeremy White",
        profession:"consultant",
    },
     {
        imgT:teamB,
        nom :"Sofia Mayer",
        profession:"consultant",
    },
     {
        imgT:teamC,
        nom :"carlie Addison",
        profession:"Manager",
    },
     {
        imgT:teamD,
        nom :"Richard Nautz",
        profession:"Founder",
    }
]


export const contact = [
    {
        local1:"4239 Lapeer Rd, Port Hurons, MI 48060",
         local2:"+1 (800) 478-42-51",
         local3:"+1 (800) 479-43-52",
         local4:"We are open Mn-Fr: 10am - 8pm",
    },
       
]
export const pricing = [
    {
        titre:"Regulars Package",
        price:"$289",
        test:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sint?",
        lorem1:"Lorem ipsum dolor sit amet.",
        lorem2:"Lorem ipsum.",
        lorem3:"Lorem ipsum dolor amet.",
        lorem4:"Lorem ipsum dolor sit amet.",
        lorem5:"Lorem ipsum dolor sit.",
    },
     {
        titre:"Standart Package",
        price:"$541",
        test:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sint?",
        lorem1:"Lorem ipsum dolor sit amet.",
        lorem2:"Lorem ipsum.",
        lorem3:"Lorem ipsum dolor amet.",
        lorem4:"Lorem ipsum dolor sit amet.",
        lorem5:"Lorem ipsum dolor sit.",
    },
     {
        titre:"Premium Package",
        price:"$756",
        test:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sint?",
        lorem1:"Lorem ipsum dolor sit amet.",
        lorem2:"Lorem ipsum.",
        lorem3:"Lorem ipsum dolor amet.",
        lorem4:"Lorem ipsum dolor sit amet.",
        lorem5:"Lorem ipsum dolor sit.",
    },
]


export const competente = 
[
    { label: "Market Analysis",
       description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",  
     percent: 100, color: "#77DD77"
    },
    { label: "Optimisation", 
               description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",   
          percent: 90, color: "#77DD77"
     },
    { label: "Integration",
               description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",   
             percent:   80, color: "#77DD77"
     },
     { label: "Development",
               description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, suscipit?",      
             percent: 50, color: "#77DD77" 
    },

]

export const portfolioOptions = [
    "All",
    "Development",
    "Optimization",
    "Integration",
];

export type portfolio = {
    img:string;
    nom :string,
    categorie?:string;
}
 export const portfolioItems:portfolio[] = [
    {
        img:portA,
        nom :"porto1",
        categorie:portfolioOptions[1],
    },
    {
        img:portB,
        nom :"porto2",
        categorie:portfolioOptions[2],
    },
    {
        img:portC,
        nom :"porto3",
        categorie:portfolioOptions[3],
    },
    {
        img:portD,
        nom :"porto4",
        categorie:portfolioOptions[4],
    },
    {
        img:portE,
        nom :"porto5",
        categorie:portfolioOptions[5],
    },
    {
        img:portF,
        nom :"porto6",
        categorie:portfolioOptions[6],
    },
    {
        img:portg,
        nom :"porto7",
        categorie:portfolioOptions[7],
    },
    {
        img:porth,
        nom :"porto8",
        categorie:portfolioOptions[8],
    },
    {
        img:portI,
        nom :"porto9",
        categorie:portfolioOptions[9],
    },
 ]
 export type testimoniale= {
id : string
 description: string;
 img: string;
 nom: string;
 poste: string;
}


export const testimonial:testimoniale[] = [
    {
        id:"1",
        description :'lorem ipsum dolor sit amet , consectetur adiscing elit.Labore squi voluptatem explicado vero non.AT ducimus allias.',
        img:aut,
        nom:'Carlie Addisson',
        poste:"manager"
    },
     {  
        id:"2",
        description :'lorem ipsum dolor sit amet , consectetur adiscing elit.Labore squi voluptatem explicado vero non.AT ducimus allias.',
        img:founder,
        nom:'Olivia Grosh',
        poste:"manager"
    },
     {
        id:"3",
       description :'lorem ipsum dolor sit amet , consectetur adiscing elit.Labore squi voluptatem explicado vero non.AT ducimus allias.',
        img:aut,
        nom:'Richard Nautz',
        poste:"manager"
    },
     {
        id:"4",
       description :'lorem ipsum dolor sit amet , consectetur adiscing elit.Labore squi voluptatem explicado vero non.AT ducimus allias.',
        img:founder,
        nom:'Masse Ndiaye',
        poste:"developpers"
    },

]