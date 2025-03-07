import {
  brown_rice,
  noodle,
  rice,
  salad,
  corn,
  avocado,
  edamame,
  chilli,
  cucumber,
  carrot,
  sweetonion,
  ginger,
  cochujan,
  ponzu_sauce,
  aioli,
  sweet_soy,
  salmon,
  crap,
  octopus,
  chicken,
  tufu,
  tuna,
  spicy_salmon,
  shrimp,
} from "~/content/index.js";
const buildFoodData = [
  {
    id: 1,
    name: "brown rice",
    type: "base-food",
    image: brown_rice,
    price: 0.8,
  },
  { id: 2, name: "salad", type: "base-food", image: salad, price: 0.8 },
  { id: 4, name: "rice", type: "base-food", image: rice, price: 0.8 },
  { id: 3, name: "noodle", type: "base-food", image: noodle, price: 0.8 },
  { id: 5, name: "carrot", type: "vegetable", image: carrot, price: 0.8 },
  { id: 6, name: "corn", type: "vegetable", image: corn, price: 0.8 },
  { id: 7, name: "chilli", type: "vegetable", image: chilli, price: 0.8 },
  { id: 8, name: "cucumber", type: "vegetable", image: cucumber, price: 0.8 },
  {
    id: 9,
    name: "sweetonion",
    type: "vegetable",
    image: sweetonion,
    price: 0.8,
  },
  { id: 10, name: "ginger", type: "vegetable", image: ginger, price: 0.8 },
  { id: 11, name: "avocado", type: "vegetable", image: avocado, price: 0.8 },
  { id: 12, name: "edamame", type: "vegetable", image: edamame, price: 0.8 },
  { id: 13, name: "cochujan", type: "flavor", image: cochujan, price: 0 },
  {
    id: 14,
    name: "ponzu sauce",
    type: "flavor",
    image: ponzu_sauce,
    price: 0,
  },
  { id: 15, name: "aioli", type: "flavor", image: aioli, price: 0 },
  { id: 16, name: "sweet_soy", type: "flavor", image: sweet_soy, price: 0 },
  { id: 17, name: "salmon", type: "protein", image: salmon, price: 0.8 },
  { id: 18, name: "chicken", type: "protein", image: chicken, price: 0.8 },
  { id: 19, name: "crap", type: "protein", image: crap, price: 0.8 },
  {
    id: 20,
    name: "spicy salmon",
    type: "protein",
    image: spicy_salmon,
    price: 0.8,
  },
  { id: 21, name: "tufu", type: "protein", image: tufu, price: 0.8 },
  { id: 22, name: "tuna", type: "protein", image: tuna, price: 0.8 },
  { id: 23, name: "shrimp", type: "protein", image: shrimp, price: 0.8 },
  { id: 24, name: "octopus", type: "protein", image: octopus, price: 0.8 },
];
export default buildFoodData;
