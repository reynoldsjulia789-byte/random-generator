console.log('👍 JS Connected');

// Tailwind Background Utlities
const backgrounds =
[
  "bg-red-300",
  "bg-green-300",
  "bg-blue-300"
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

  // Get random background
  const randomBgIndex = Math.floor(Math.random() * backgrounds.length);
  const newBackground = backgrounds[randomBgIndex];

  // Replace entire class attribute
  body.className = `${newBackground} min-h-screen flex items-center justify-center transition-all duration-700`;
}

// Add event listener to button
refreshBtn.addEventListener("click", getRandomDish);
