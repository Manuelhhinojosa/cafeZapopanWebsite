import dish1 from "../assets/dish1.jpg";
import dish2 from "../assets/dish2.jpg";
import dish3 from "../assets/dish3.jpg";
import dish4 from "../assets/dish4.jpg";
import dish5 from "../assets/dish5.jpg";
import dish6 from "../assets/dish6.jpg";
import dish7 from "../assets/dish7.jpg";
import dish8 from "../assets/dish8.jpg";
import dish9 from "../assets/dish9.jpg";
import dish10 from "../assets/dish10.jpg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Inicio", targetId: "hero" },
  { text: "Especialidades", targetId: "dishes" },
  { text: "Sobre Nosotros", targetId: "about" },
  { text: "Misión", targetId: "mission" },
  { text: "Menú", targetId: "menu" },
  { text: "Reseńas", targetId: "review" },
  { text: "Contacto", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Panini Vegano",
    description:
      "Pan de masa madre, pesto de almdendras, ensalada jamón sin crueldad",
  },
  {
    image: dish2,
    title: "Bowl de Proteina `Cárnica`",
    description:
      "Salsicha de `puerco`, `huevos`, `tocino` acompańado de masa madre y ensalada",
  },
  {
    image: dish3,
    title: "Bowl de Avena",
    description: "Avena, frutos de temporada, miel de maple y leche",
  },
  {
    image: dish4,
    title: "Bowl de Fruta",
    description: "Fruta de temporada, granola, miel",
  },
  {
    image: dish5,
    title: "Waffles",
    description: "Waffles de avena serivdos con fruta, miel y crema de limón",
  },
  {
    image: dish6,
    title: "Ensalda Llena de Proteína",
    description:
      "Enslada de granos altos en proteina, sprouts, huevo y pan de masa madre",
  },
  {
    image: dish7,
    title: "Tostada de Agucate",
    description:
      "Aguacate, aceite de chile serrano, huevo al gusto, tocino y ensalada",
  },
  {
    image: dish8,
    title: "Tostada de Aguacate Especial",
    description:
      "Justo como la Tostada de Aguacate, acompańada de nuestra salsa especial para chilaquiles",
  },
  {
    image: dish9,
    title: "Baggels Recien Horneado",
    description: "Gran variedad de baggels que puedes acompańar a tu gusto",
  },
  {
    image: dish10,
    title: "Pancakes de Avena",
    description:
      "Pankes de avena acompańados de fruta de temporda, miel y crema de limón",
  },
];

export const ABOUT = {
  header: "Amamos lo que hacemos",
  content:
    "Café Zapopan es un espacio con historia y alma de barrio, ubicado en el corazón de Zapopan, Jalisco, a solo una cuadra de la Basílica y justo en frente del MAZ. Con más de 20 años de historia, este café ha sido atendido con cariño por dos generaciones: primero por la madre y ahora por la hija, quienes han mantenido viva la tradición de ofrecer un lugar cálido y auténtico. Más que un café, es un punto de encuentro para la comunidad, donde vecinos, amigos y visitantes se reúnen para convivir, compartir historias y disfrutar del ambiente acogedor que solo un lugar con raíces puede ofrecer.",
};

export const MISSION =
  "Nuestra misión es seguir siendo un espacio abierto para todas y todos, donde se fomente la convivencia y el respeto. Promovemos una forma de vida consciente, invitando a disfrutar de alimentos libres de sufrimiento animal, en armonía con el entorno y la comunidad.";

export const REVIEW = {
  name: "CaracolilloGDL",
  profession: "Buscador de cafés",
  content:
    "“Amamos este lugar porque su atención al cliente fue muy buena, estuvieron muy atentos de sus clientes todo el tiempo, además de que te sirven agua de cortesía lo que nos pareció un lindo detalle.”",
};

export const CONTACT = [
  { key: "address", value: "Andador 20 de noviembre 109, Zapopan 45100" },
  { key: "phone", value: "Phone: 33 3633 6137" },
  { key: "email", value: "Email: cafezapopan@contact.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.instagram.com/cafezapopan/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
];
