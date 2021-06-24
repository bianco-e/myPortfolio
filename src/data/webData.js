import HTMLLogo from "../images/logohtml.png";
import CSSLogo from "../images/logocss.png";
import JSLogo from "../images/logoJS.png";
import TSLogo from "../images/logoTS.webp";
import ReactLogo from "../images/logoReact.png";
import NodeLogo from "../images/logoNode.png";
import NextLogo from "../images/logoNext.png";
import FirebaseLogo from "../images/logoFirebase.png";
import MongoLogo from "../images/logoMongo.png";

import animalCardomPvw from "../images/animalCardomPvw.png";
//import consultoraRarPvw from "../images/consultoraRarPvw.png";
import helpSocialAppPvw from "../images/helpSocialAppPvw.png";
import portfolioPvw from "../images/portfolioPvw.png";
import onlineShoppingPvw from "../images/onlineShoppingPvw.png";
//import queCocinoPvw from "../images/queCocinoPvw.png";
import petfinderPvw from "../images/petfinderPvw.png";

import logoGmail from "../images/logoGmail.png";
import logoLinkedin from "../images/logoLinkedin.png";
import logoGithub from "../images/logoGithub.png";

export const feedbackData = {
  copied: {
    es: "¡Copiado al portapapeles!",
    en: "Copied to clipboard!",
  },
};

export const nameData = {
  name: "Bianco Emiliozzi",
  job: {
    es: "desarrollador javascript",
    en: "javascript developer",
  },
};

export const navData = [
  {
    es: "Quién soy",
    en: "Who I am",
    ref: "aboutmeRef",
  },
  {
    es: "Proyectos",
    en: "Projects",
    ref: "projectsRef",
  },
  {
    es: "Contacto",
    en: "Contact",
    ref: "contactRef",
  },
];

export const aboutMeData = {
  title: {
    es: "Quién soy",
    en: "Who I am",
  },
  text: {
    es: [
      "Me llamo Bianco y soy desarrollador javascript de Argentina. Hablo español (mi idioma nativo) e inglés con competencia profesional.",
      "Me metí en el mundo de la programación como auto-didacta hace mas de dos años y hoy en día trabajo como desarrollador React y NextJS.",
    ],
    en: [
      "I'm Bianco, an argentinian javascript developer. I speak spanish (my native language) and english with professional working proficiency.",
      "I got in the programming world as self-taught more than two years ago, and I'm currently working for a company as a React and NextJS developer.",
    ],
  },
};

export const contactData = {
  title: {
    es: "Contacto",
    en: "Contact",
  },
  channels: [
    {
      icon: logoLinkedin,
      link: "https://www.linkedin.com/in/biancoemiliozzi",
      title: { es: "Perfil de Linkedin", en: "Linkedin profile" },
    },
    { icon: logoGmail, email: "bianco.emiliozzi@gmail.com" },
    {
      icon: logoGithub,
      link: "https://github.com/bianco-e",
      title: { es: "Perfil de Github", en: "Github profile" },
    },
  ],
};

export const projectsData = {
  title: {
    es: "Proyectos",
    en: "Projects",
  },
  projects: [
    {
      deploy:
        "https://animalcardom.vercel.app?utm_source=portfolio&utm_medium=projects",
      description: {
        es: "Juego de cartas PvPC. Cada jugador recibe 5 animales y 3 plantas para aplicar a los animales. Al empezar toca un terreno aleatorio que puede beneficiar a ciertos animales. Cada animal tiene una habilidad, ataque y vida, y el objetivo es matar todas las cartas del oponente.",
        en: "Card game PvPC. Each player gets five different animals cards, and three different plants to apply on them if wanted. Also a terrain will be randomly set at the very start. Each card has an ability, attack and life points. The objective is to kill all opponent's cards.",
      },
      name: "Animal Cardom",
      preview: animalCardomPvw,
      repos: [
        "https://github.com/bianco-e/animal-cardom-front",
        "https://github.com/bianco-e/animal-cardom-back",
      ],
      techs: [TSLogo, ReactLogo, NodeLogo, MongoLogo],
    },
    {
      deploy: "https://onlineshopping.vercel.app/",
      description: {
        es: "Página de tienda online, donde el cliente puede diseñar estilos y administrar sus productos y categorías desde el panel de administrador",
        en: "E-commerce website, where client can set the page style, text and personal data, and also manage their products and categories from admin panel",
      },
      name: "Online Store",
      preview: onlineShoppingPvw,
      repos: ["https://github.com/bianco-e/onlineStore"],
      techs: [ReactLogo, FirebaseLogo],
    },
    {
      deploy: "https://petfinder-arg.vercel.app/",
      description: {
        es: "Petfinder es una aplicación web donde podes publicar los datos de tu mascota perdida, o si encontraste una podes encontrar a la persona que la perdió",
        en: "Petfinder is a web app where you can post your pet details in case it is lost or if you found one you can contact the person who lost it.",
      },
      name: "Petfinder",
      preview: petfinderPvw,
      repos: ["https://github.com/bianco-e/petfinder"],
      techs: [ReactLogo, NextLogo, MongoLogo],
    },
    {
      deploy: "https://helpsocialapp.vercel.app/",
      description: {
        es: "Red social de ayuda. Los usuarios pueden subir cosas que necesiten o que pueden donar para alguien más. Especialmente objetos que respondan a una necesidad de cuidado de la salud.",
        en: "Help Social App. People can upload many things that they are looking for, or things they can donate and can be useful for someone else. Specially elements related to health care.",
      },
      name: "NecesiDar",
      preview: helpSocialAppPvw,
      repos: ["https://github.com/bianco-e/helpSocialApp"],
      techs: [ReactLogo, FirebaseLogo],
    },
    {
      deploy: "https://biancoemiliozzi.vercel.app/",
      description: {
        es: "Portfolio de presentación. Portfolio para presentar proyectos web desarrollados. ¿Querés saber qué es recursividad? ¡Hacé click en el nombre!",
        en: "Introduction portfolio. Portfolio to show someone else my developed web projects. Do you want to see what recursion is? Click on the name!",
      },
      name: "Portfolio",
      preview: portfolioPvw,
      repos: ["https://github.com/bianco-e/myPortfolio"],
      techs: [ReactLogo],
    },
  ],
};

export const techsLogos = [
  HTMLLogo,
  CSSLogo,
  JSLogo,
  TSLogo,
  ReactLogo,
  NextLogo,
  NodeLogo,
  MongoLogo,
];
