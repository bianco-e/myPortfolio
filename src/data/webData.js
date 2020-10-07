import HTMLLogo from "../images/logohtml.png";
import CSSLogo from "../images/logocss.png";
import JSLogo from "../images/logoJS.png";
import ReactLogo from "../images/logoReact.png";
import NodeLogo from "../images/logoNode.png";
import FirebaseLogo from "../images/logoFirebase.png";
import MongoLogo from "../images/logoMongo.png";

import animalCardomPvw from "../images/animalCardomPvw.png";
import consultoraRarPvw from "../images/consultoraRarPvw.png";
import helpSocialAppPvw from "../images/helpSocialAppPvw.png";
import portfolioPvw from "../images/portfolioPvw.png";
import onlineShoppingPvw from "../images/onlineShoppingPvw.png";
import queCocinoPvw from "../images/queCocinoPvw.png";

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
      "Hace más de un año vengo trabajando en proyectos de desarrollo web y capacitándome en el área con distintas tecnologías.",
      "Me metí en el mundo de la programación como auto-didacta, de esa forma aprendí mucho y todavía lo sigo haciendo. Unos meses después decidí empezar en un instituto.",
      "Busco insertarme en un entorno laboral donde pueda asumir nuevos desafíos y mejorar aún más mis habilidades.",
    ],
    en: [
      "My name is Bianco and I'm an argentinian javascript developer. I speak spanish (my native language) and also english with professional working proficiency.",
      "I am working on web development projects and training myself using different technologies for more than a year.",
      "I got in the programming world as self-taught, I learned a lot in this way and keep doing it. A few months later I decided to start in an academy.",
      "Now I'm looking for new challenges, that's why I would like to find a nice work environment where I can challenge myself, learn and improve my skills even more.",
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
      deploy: "https://animalcardom.vercel.app",
      description: {
        es:
          "Juego de cartas PvPC. Cada jugador recibe 5 animales y 3 plantas para aplicar a los animales. Al empezar toca un terreno aleatorio que puede beneficiar a ciertos animales. Cada animal tiene una habilidad, ataque y vida, y el objetivo es matar todas las cartas del oponente.",
        en:
          "Card game PvPC. Each player gets five different animals cards, and three different plants to apply on them if wanted. Also a terrain will be randomly set at the very start. Each card has an ability, attack and life points. The objective is to kill all opponent's cards.",
      },
      name: "Animal Cardom",
      preview: animalCardomPvw,
      repos: ["https://github.com/bianco-e/animalCardom"],
      techs: [JSLogo, ReactLogo],
    },
    {
      deploy: "https://onlineshopping.vercel.app/",
      description: {
        es:
          "Página de tienda online, donde el cliente puede diseñar estilos y administrar sus productos y categorías desde el panel de administrador",
        en:
          "E-commerce website, where client can set the page style, text and personal data, and also manage their products and categories from admin panel",
      },
      name: "Online Store",
      preview: onlineShoppingPvw,
      repos: ["https://github.com/bianco-e/onlineStore"],
      techs: [JSLogo, ReactLogo, FirebaseLogo],
    },
    {
      deploy: "https://helpsocialapp.vercel.app/",
      description: {
        es:
          "Red social de ayuda. Los usuarios pueden subir cosas que necesiten o que pueden donar para alguien más. Especialmente objetos que respondan a una necesidad de cuidado de la salud.",
        en:
          "Help Social App. People can upload many things that they are looking for, or things they can donate and can be useful for someone else. Specially elements related to health care.",
      },
      name: "NecesiDar",
      preview: helpSocialAppPvw,
      repos: ["https://github.com/bianco-e/helpSocialApp"],
      techs: [JSLogo, ReactLogo, FirebaseLogo],
    },
    {
      deploy: "https://quecocino.vercel.app/",
      description: {
        es:
          "Aplicación para saber qué cocinar. Los usuarios pueden filtrar una receta según los ingredientes que tengan o no tengan, o pueden pedir una receta aleatoria",
        en:
          "App to know what to cook. Users can filter a recipe by their having and not having ingredients, or they can just ask for a random recipe.",
      },
      name: "¿Qué cocino?",
      preview: queCocinoPvw,
      repos: [
        "https://github.com/bianco-e/que-cocino",
        "https://github.com/bianco-e/que-cocino-api",
      ],
      techs: [JSLogo, ReactLogo, NodeLogo, MongoLogo],
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
      repos: ["Private"],
      techs: [JSLogo, ReactLogo, FirebaseLogo],
    },
    {
      deploy: "https://biancoemiliozzi.vercel.app/",
      description: {
        es:
          "Portfolio de presentación. Portfolio para presentar proyectos web desarrollados. ¿Querés saber qué es recursividad? ¡Hacé click en el nombre!",
        en:
          "Introduction portfolio. Portfolio to show someone else my developed web projects. Do you want to see what recursion is? Click on its name!",
      },
      name: "Portfolio",
      preview: portfolioPvw,
      repos: ["https://github.com/bianco-e/myPortfolio"],
      techs: [JSLogo, ReactLogo],
    },
  ],
};

export const techsLogos = [
  HTMLLogo,
  CSSLogo,
  JSLogo,
  ReactLogo,
  NodeLogo,
  MongoLogo,
];
