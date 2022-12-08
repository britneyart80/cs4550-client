import axios from "axios";
import { mockProductReviews } from "./mockProductReviews";
import apiUrl from "../apiConfig";
import { UserContext } from "../../client/contextProviders/user/UserContext";

const API_KEY = "28f92c9674274356b51f77cb7c8ce68e";

export const getRecipesBySearchTerm = async (term) => {
  const recipesMatchingSearchTerm = await axios({
    method: "GET",
    // url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
    url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`,
    params: {
      query: `${term}`,
      instructionsRequired: "true",
      addRecipeInformation: "true",
      number: "20",
    },
    // headers: {
    //   "X-RapidAPI-Key": "eae00ca4a9msh9e0fa44b797861ap15a97cjsn0bb77c929b5e",
    //   "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    // },
  });
  return recipesMatchingSearchTerm.data;
};

export const getRandomRecipes = async () => {
  const randomRecipes = await axios({
    method: "GET",
    // url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random",
    url: `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}`,
    params: { number: "3" },
    // headers: {
    //   "X-RapidAPI-Key": "eae00ca4a9msh9e0fa44b797861ap15a97cjsn0bb77c929b5e",
    //   "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    // },
  });
  return randomRecipes.data;
};

export const getRecipeReviews = (id) => {
  return mockProductReviews;
  // return axios({
  //     method: "GET",
  //     url: apiUrl + "/recipes/" + id + "/reviews",
  //   });
};

export const getRecipeById = async (id) => {
  const recipeMatchingId = await axios({
    method: "GET",
    url: `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`,
  });
  return recipeMatchingId.data;
};

export const addRecipeToLiked = async (favorites) => {
  const likeRecipe = await axios({
    method: "PATCH",
    url: `${apiUrl}/favorites`,
    data: {
      favorites: favorites,
    },
  });
  return likeRecipe;
};
