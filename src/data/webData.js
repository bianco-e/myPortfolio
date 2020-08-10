import HTMLLogo from "../images/logohtml.png";
import CSSLogo from "../images/logocss.png";
import JSLogo from "../images/logoJS.png";
import ReactLogo from "../images/logoReact.png";
import NodeLogo from "../images/logoNode.png";
import FirebaseLogo from "../images/logoFirebase.png";

import animalCardomPvw from "../images/animalCardomPvw.png";
import consultoraRarPvw from "../images/consultoraRarPvw.png";
import helpSocialAppPvw from "../images/helpSocialAppPvw.png";

import logoGmail from "../images/logoGmail.png";
import logoLinkedin from "../images/logoLinkedin.png";
import logoGithub from "../images/logoGithub.png";

export const navData = [
  {
    es: "Quién soy",
    en: "Who I am",
  },
  {
    es: "Proyectos",
    en: "Projects",
  },
  {
    es: "Contacto",
    en: "Contact",
  },
];

export const aboutMeData = {
  title: {
    es: "Quién soy",
    en: "Who I am",
  },
  text: {
    es: [
      "Me llamo Bianco",
      "Este último año estuve trabajando en proyectos de desarrollo web y capacitándome en el área con distintas tecnologías.",
      "Me metí en el mundo de la programación como auto-didacta, y de esa forma aprendí mucho. Unos meses después decidí empezar en un instituto.",
      "Busco insertarme en un entorno laboral donde pueda asumir desafíos y mejorar aún más mis habilidades.",
    ],
    en: [
      "I'm Bianco",
      "This last year I've been working on web development projects and training myself using different technologies.",
      "I got in the programming world as a self-learner and I can say I learned a lot. A few months later I decided to start in an institute.",
      "Now I'm looking for new challenges, that's why I would like to find a nice work environment where I can learn and improve my skills even more.",
    ],
  },
};

export const contactData = {
  title: {
    es: "Contacto",
    en: "Contact",
  },
  channels: [
    { icon: logoLinkedin, link: "https://www.linkedin.com/in/biancoemiliozzi" },
    { icon: logoGithub, link: "https://github.com/bianco-e" },
    { icon: logoGmail, link: "bianco.emiliozzi@gmail.com" },
  ],
};

export const projectsData = {
  title: {
    es: "Proyectos",
    en: "Projects",
  },
  projects: [
    {
      deploy: "https://animalcardom.vercel.app",
      description: {
        es:
          "Juego de cartas PvPC. Cada jugador recibe 5 animales y 3 plantas para aplicar a los animales. Al empezar toca un terreno aleatorio que puede beneficiar a ciertos animales. Cada animal tiene una habilidad, ataque y vida, y el objetivo es matar todas las cartas del oponente.",
        en:
          "Card game PvPC. Each player gets five different animals cards, and three different plants to apply on them if wanted. Also a terrain will be randomly set at the very start. Each card has an ability, attack and life points. The objective is to kill all opponent's cards.",
      },
      name: "Animal Cardom",
      preview: animalCardomPvw,
      repo: "https://github.com/bianco-e/animalCardom",
      techs: [JSLogo, ReactLogo],
    },
    {
      deploy: "https://helpsocialapp.vercel.app/",
      description: {
        es:
          "Red social de ayuda. Los usuarios pueden subir cosas que necesiten o que pueden donar para alguien más. Especialmente objetos que respondan a una necesidad de cuidado de la salud.",
        en:
          "Help Social App. People can upload many things that they are looking for, or things they can donate and can be useful for someone else. Specially elements related to health care.",
      },
      name: "Give a hand",
      preview: helpSocialAppPvw,
      repo: "https://github.com/bianco-e/helpSocialApp",
      techs: [JSLogo, ReactLogo, FirebaseLogo],
    },
    {
      deploy: "https://consultorarar.com.ar/",
      description: {
        es:
          "Página para empresa. Página web estática a pedido de una empresa, donde el administrador con su clave puede actualizar el contenido.",
        en:
          "Web page for a company. Static web page for a company, where admin can modify the content using a key.",
      },
      name: "Consultora RAR",
      preview: consultoraRarPvw,
      repo: "Privado",
      techs: [JSLogo, ReactLogo, FirebaseLogo],
    },
    {
      deploy: "https://consultorarar.com.ar/",
      description: {
        es:
          "Página para empresa. Página web estática a pedido de una empresa, donde el administrador con su clave puede actualizar el contenido.",
        en:
          "Web page for a company. Static web page for a company, where admin can modify the content using a key.",
      },
      name: "Consultora RAR",
      preview: consultoraRarPvw,
      repo: "Privado",
      techs: [JSLogo, ReactLogo, FirebaseLogo],
    },
  ],
};

export const techsLogos = [HTMLLogo, CSSLogo, JSLogo, ReactLogo, NodeLogo];
