// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/" },
  { name: "Productos", url: "/products" },
  { name: "Contáctanos", url: "/contact" },
];
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
      { name: "Sobre Nosotros", url: "#" },
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
  footerLinks,
  socialLinks,
};