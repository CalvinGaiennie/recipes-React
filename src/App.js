import "./App.css";

// const recipeData = {
//   sushiRice: {
//     title: "Sushi Rice",
//     ingredients: [
//       `{rice} cups of sushi rice (short or medium grain rice.)`,
//       `{water} cups of water`,
//       `{vinegar} cups of rice vinegar`,
//       "{sugar} cups of sugar",
//       "{salt} teaspoons of salt",
//     ],
//     steps: [
//       `Step 1: Put the rice in a large bowl and rince it four times.`,
//       `Step 2: Cook the rice how your would normally cook rice. When it is finished cover it and let it cool for 10 mins.`,
//       `Step 3: In a small saucepan, combine the rice vinegar, sugar, and salt. keep it on low heat and stir slowly until the salt and sugar disolve into the vinegar.`,
//       `Step 4: Put the rice in a large bown or a baking sheet, pour the vinegar on it and slowly fold the vinegar mixture into the rice being carful to not mash the rice.`,
//       `Step 5: Let the rice cool to room temperature. It can be slightly warm, but not hot.`,
//     ],
//     ingredientMap: {
//       rice: 1,
//       water: 1,
//       vinegar: 0.25,
//       sugar: 0.125,
//       salt: 0.5,
//     },
//     sushiRice: {},
//   },
//   pitaBread: {
//     title: ["Pita Bread"],
//     ingredients: [
//       `{water} cups of water`,
//       `{yeast} teaspoons of yeast`,
//       `{sugar} teaspoons of sugar`,
//       "{flour} cups of flour",
//       "{salt} teaspoons of salt",
//       "{oliveOil} tablespoons of olive oil",
//     ],
//     steps: [
//       `Step 1: Mix {water} cup of warm water {yeast} teaspoons of yeast and {sugar} teaspoons of sugar in a bowl then let it sit for 5 minutes.,`,
//       `Step 2: Add {flour} cups of flour. {salt} teaspoons of salt and {oliveOil} tablespoon of olive oil.`,
//       `Step 3: Sprinkle flour on a clean work surface then knead the dough for 5-7 minutes slowly adding about {flour2} cups of flour until the dough is smooth and elastic.`,
//       `Step 4: Coat a bowl in olive oil then put the dough in and let it rise until it doubles in size. About an hour.`,
//       `Step 5: Cut the dough into small peices roll it flat and cook it for 2 mins each side in the oven or on the stove.`,
//     ],
//     ingredientMap: {
//       water: 0.5,
//       yeast: 1,
//       sugar: 0.25,
//       flour: 1.5,
//       salt: 1,
//       oliveOil: 0.5,
//     },
//   },
// };
const recipeData = [
  {
    title: "this is the name",
    ingredients: ["stuff", "stuffff", "mo stuffff"],
  },
  {
    title: "this is the other name",
    ingredients: ["shit", "shittt", "more shit"],
  },
];
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Settings />
      <Body />
    </div>
  );
}

function Header() {
  return (
    <div className="header margin">
      <h1>Calvin's Recipes</h1>
      <p>Here are some recipes I've been enjoying recently.</p>
    </div>
  );
}

function Settings() {
  return (
    <div className="margin">
      <h2>Settings</h2>
      <div>
        <select>
          <option></option>
        </select>
        <select>
          <option></option>
        </select>
      </div>
    </div>
  );
}
function Body() {
  return (
    <div className="recipe-body margin">
      <Ingredients />
      <Steps />
    </div>
  );
}
function Menu() {
  const recipes = recipeData;
  return (
    <ul>
      {recipes.map((recipe) => (
        <Recipe recipeObj={recipe} key={recipe.title} />
      ))}
    </ul>
  );
}
function Ingredients() {
  const recipes = recipeData;
  return (
    <div className="body-parts">
      <h2>Ingredients</h2>
      <p>1</p>
      <p>2</p>
    </div>
  );
}
function Recipe({ recipeObj }) {
  console.log(recipeObj);
  return (
    <li>
      <p>{recipeObj.title}</p>
    </li>
  );
}
function Steps() {
  return (
    <div className="steps body-parts">
      <h2>Steps</h2>
      <p>one</p>
      <p>two</p>
    </div>
  );
}

export default App;
