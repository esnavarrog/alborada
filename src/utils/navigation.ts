// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Prefabricados", url: "/products" },
  { name: "Ferretería", url: "/products" },
  { name: "Servicios", url: "/products" },
  { name: "Nosotros", url: "/about" },
  { name: "Contáctanos", url: "/contact" },
];

const phoneNumber = '56931892006';
// An array of links for footer
const footerLinks = [
  {
    section: "Soluciones",
    links: [
      { name: "Productos", url: "/products" },
      { name: "Servicios", url: "/services" },
    ],
  },
  {
    section: "Empresa",
    links: [
      { name: "Sobre Nosotros", url: "/about" },
      { name: "Terminos y Condiciones", url: "#" },
      { name: "Políticas de Privacidad", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/"
};

export default {
  navBarLinks,
  phoneNumber,
  footerLinks,
  socialLinks,
};