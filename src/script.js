console.log('👍 JS Connected');

// Taiwind gradient direction
const bgDirection = 
[
  "bg-gradient-to-t",
  "bg-gradient-to-tr",
  "bg-gradient-to-r",
  "bg-gradient-to-br",
  "bg-gradient-to-b",
  "bg-gradient-to-bl",
  "bg-gradient-to-l",
  "bg-gradient-to-tl",
  "bg-radial",
  "bg-radial-[at_50%_100%]",
  "bg-radial-[at_100%_100%]",
  "bg-radial-[at_100%_0%]",
  "bg-radial-[at_50%_100%]",
  "bg-radial-[at_0%_100%]",
  "bg-radial-[at_0%_0%]"
];

// Tailwind Background Utlities
const startColors =
[
  "from-red-500",
  "from-orange-500",
  "from-amber-500",
  "from-yellow-500",
  "from-lime-500",
  "from-green-500",
  "from-emerald-500",
  "from-teal-500",
  "from-cyan-500",
  "from-sky-500",
  "from-blue-500",
  "from-indigo-500",
  "from-violet-500",
  "from-purple-500",
  "from-fuchsia-500",
  "from-pink-500",
  "from-rose-500"
];

const middleColors =
[
  "via-red-300",
  "via-orange-300",
  "via-amber-300",
  "via-yellow-300",
  "via-lime-300",
  "via-green-300",
  "via-emerald-300",
  "via-teal-300",
  "via-cyan-300",
  "via-sky-300",
  "via-blue-300",
  "via-indigo-300",
  "via-violet-300",
  "via-purple-300",
  "via-fuchsia-300",
  "via-pink-300",
  "via-rose-300"
];

const endColors =
[
  "to-red-500",
  "to-orange-500",
  "to-amber-500",
  "to-yellow-500",
  "to-lime-500",
  "to-green-500",
  "to-emerald-500",
  "to-teal-500",
  "to-cyan-500",
  "to-sky-500",
  "to-blue-500",
  "to-indigo-500",
  "to-violet-500",
  "to-purple-500",
  "to-fuchsia-500",
  "to-pink-500",
  "to-rose-500"
];

// Sample design dishes JSON data
const dishes =
[
  {
    dish:         "Tortellini Piccata",
    ingredients:  "lemon juice, lemon zest, fresh parsley, butter, flour, broth, 20 oz tortellini, capers, parmesean, a dash of heavy cream"
  },
  {
    dish:         "Fajitas",
    ingredients:  "tortillas, meat, onions, peppers"
  },
  {
    dish:         "Gyros",
    ingredients:  "pita, meat, tomatoes, pickled red onion, lettuce, tzatziki sauce"
  },
  {
    dish:         "Sweedish Meatballs",
    ingredients:  "meatballs, butter, flour, broth, Worcestershire sauce, Dijon mustard, parsley, sour cream"
  },
  {
    dish:         "Chicken Alfredo",
    ingredients:  "chicken, fettuccine pasta, butter, heavy whipping cream, parmesean"
  },
  {
    dish:         "Shrimp Scampi",
    ingredients:  "shrimp, butter, onion, lemon juice, pasta, parmesean, basil, parsley"
  },
  {
    dish:         "Chicken Corn Chowder",
    ingredients:  "chicken, bacon, butter, onion, peppers, celery, flour, broth, potatoes, corn, heavy cream"
  },
  {
    dish:         "Chilli",
    ingredients:  "ground beef, onion, tomato paste, canned diced tomatoes, beans, sour cream, cheese"
  },
  {
    dish:         "Taco Soup",
    ingredients:  "ground beef, onion, canned diced tomatoes, chiles, broth, corn, beans, sour cream, cheese"
  },
  {
    dish:         "Baked Mac&Cheese",
    ingredients:  "macoroni noodles, flour, butter, cheese, milk, breadcrumbs"
  },
  {
    dish:         "Burgers",
    ingredients:  "ground beef, hamburger buns, lettuce, onions, tomatoes, pickles"
  },
  {
    dish:         "Philly Cheesesteak",
    ingredients:  "steak, cheese, peppers, onions, mushrooms, hoagie rolls"
  },
  {
    dish:         "Orange Chicken",
    ingredients:  "chicken, egg, cornstarch, flour, oil, orange juice, orange zest, brown sugar, rice vinegar, soy sauce, ginger"
  },
  {
    dish:         "Chicken Pot Pie",
    ingredients:  "chicken, carrots, celery, onion, butter, flour, broth, heavy cream, pie crust, egg"
  },
  {
    dish:         "Encheladas",
    ingredients:  "tortillas, meat, onion, enchelada sauce, cheese, sour cream, tomatoes, cilantro"
  },
  {
    dish:         "Zupa Toscana",
    ingredients:  "italian ground sausage, butter, onion, broth, potatoes, heavy cream, kale, bacon, parmesean"
  },
  {
    dish:         "Jambalaya",
    ingredients:  "chicken, andouille sausage, shrimp, onion, celery, peppers, broth, canned diced tomatoes, rice"
  }
];

// Get DOM elements
const body             = document.querySelector("#body");
const dishText         = document.querySelector("#dish-text");
const dishIngredients  = document.querySelector("#dish-ingredients");
const refreshBtn       = document.querySelector("#refresh-btn");

// Function to get random dish and background
function getRandomDish()
{
  const randomIndex   = Math.floor(Math.random() * dishes.length);
  const selectedDish  = dishes[randomIndex];

  // Update dish
  dishText       .textContent = `${selectedDish.dish}`;
  dishIngredients.textContent = `${selectedDish.ingredients}`;

  // Get random background color and gradient direction
  const randomGradientIdx = Math.floor(Math.random() * bgDirection.length);
  const randomBgIndex1    = Math.floor(Math.random() * startColors.length);
  const randomBgIndex2    = Math.floor(Math.random() * middleColors.length);
  const randomBgIndex3    = Math.floor(Math.random() * endColors.length);

  const gradientDirection = bgDirection[randomGradientIdx];
  const backgroundColor1  = startColors[randomBgIndex1];
  const backgroundColor2  = middleColors[randomBgIndex2];
  const backgroundColor3  = endColors[randomBgIndex3];

  // Replace entire class attribute
  body.className = `${gradientDirection} ${backgroundColor1} ${backgroundColor2} ${backgroundColor3} min-h-screen flex items-center justify-center transition-all duration-700`;
}

// Add event listener to button
refreshBtn.addEventListener("click", getRandomDish);
