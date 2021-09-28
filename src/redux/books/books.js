const defaultState = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne collins',
    category: 'Action',
    progress: 54,
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank herbert',
    category: 'Sci-Fi',
    progress: 64,
  },
  {
    id: 3,
    title: 'capital In the twenty-First Century',
    author: 'Suzanne collins',
    category: 'Economy',
    progress: 78,
  },
];

export default function books(state = defaultState) {
  return state;
}
