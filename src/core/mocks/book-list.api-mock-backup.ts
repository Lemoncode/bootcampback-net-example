import { Book } from './book-list.model';

export const bookList: Book[] = [
  {
    id: '1',
    title: 'Cien años de soledad',
    description:
      'Una novela icónica de realismo mágico que narra la historia de la familia Buendía en el pueblo de Macondo.',
    authors: ['Gabriel García Márquez'],
    image: 'cien-anyos-de-soledad.jpg',
    reviews: [
      {
        id: '1',
        reviewer: 'Lector1',
        title: 'Obra Maestra',
        text: 'Esta novela es una obra maestra de la literatura latinoamericana.',
      },
      {
        id: '2',
        reviewer: 'Lector2',
        title: 'Increíble',
        text: 'La narrativa de García Márquez es asombrosa.',
      },
    ],
  },
  {
    id: '2',
    title: '1984',
    description:
      'Una distopía que explora temas de vigilancia estatal y control del pensamiento en un futuro totalitario.',
    authors: ['George Orwell'],
    image: '1984.jpg',
    reviews: [
      {
        id: '3',
        reviewer: 'Lector3',
        title: 'Impactante',
        text: 'Este libro es impactante y relevante incluso hoy en día.',
      },
    ],
  },
  {
    id: '3',
    title: 'El Hobbit',
    description: 'La historia de Bilbo Bolsón y su épica aventura para recuperar un tesoro custodiado por un dragón.',
    authors: ['J.R.R. Tolkien'],
    image: 'el-hobbit.jpg',
    reviews: [
      {
        id: '4',
        reviewer: 'Lector4',
        title: 'Fantástico',
        text: 'Una historia fantástica que nunca pasa de moda.',
      },
    ],
  },
  {
    id: '4',
    title: 'Matar a un ruiseñor',
    description:
      'La novela cuenta la historia de un abogado que defiende a un hombre negro acusado de violar a una mujer blanca en el sur de los Estados Unidos.',
    authors: ['Harper Lee'],
    image: 'matar-a-un-ruiseñor.jpg',
    reviews: [
      {
        id: '5',
        reviewer: 'Lector5',
        title: 'Conmovedor',
        text: 'Una narración conmovedora que aborda temas profundos de injusticia.',
      },
    ],
  },
  {
    id: '5',
    title: 'Los Juegos del Hambre',
    description:
      'La historia se desarrolla en un futuro distópico y sigue a Katniss Everdeen en su lucha por la supervivencia en un concurso mortal.',
    authors: ['Suzanne Collins'],
    image: 'los-juegos-del-hambre.jpg',
    reviews: [
      {
        id: '6',
        reviewer: 'Lector6',
        title: 'Adictivo',
        text: 'Esta serie es adictiva y llena de acción.',
      },
    ],
  },
  {
    id: '6',
    title: 'A dos metros de ti',
    description:
      'Necesitamos estar cerca de las personas que queremos casi tanto como el aire que respiramos. A Stella Grant le gusta tener el control, a pesar de no poder dominar sus propios pulmones, que la han tenido en el hospital la mayor parte de su vida. Por encima de todo, Stella necesita controlar su espacio para mantenerse alejada de cualquier persona o cosa que pueda transmitirle una infección y poner en peligro su trasplante de pulmón. Dos metros de distancia. Sin excepciones.',
    authors: ['Rachael Lippincott', 'Mikki Daughtry', 'Tobias Iaconis'],
    image: 'a-dos-metros-de-ti.jpg',
    reviews: [
      {
        id: '7',
        reviewer: 'Lector7',
        title: 'Emotivo',
        text: 'Una historia emotiva que te hará llorar.',
      },
      {
        id: '8',
        reviewer: 'Lector8',
        title: 'Inspirador',
        text: 'Una historia inspiradora sobre el amor y la esperanza.',
      },
    ],
  },
];
